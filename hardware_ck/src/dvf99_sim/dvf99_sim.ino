/*
 * This Sketch Will Provide a Simulation of the Grandstream GXP1610 Model which has
 * the DSP Group Inc. DVF9918 Model SoC.
 * Steps to simulate:
 *          1. Download Firmware from the online directory and extract assembly inside 
 *              was extracted. 
 *          2. Convert Assembly to Binary
 *          3. Send on the rising edge of TCK the bits Serially
 *          
 * Assumptions (since this is a simulation): 
 *                          1. Arduino Pins are not written
 *                          2. Clock assumes we have buffered 16 bits from the TDO line
 *                             and are reading on a byte length clock
 *                             
 * Next Stage functionality is to set breakpoints by clocking TCK and inserting code
 * 
 * 
 */

//JTAG Definitions (in ../docs there is a decent picture discribing JTAG)
#define TMS 0  
#define TDI 0 //Test Data Out from JTAG_sim into DVF9918 (Sim)
#define TDO 0 //Test Data In from DVF9918


int TCK = 0; //Clock
#define Tst_clk 1000          // Clock is set to 1 Khz
#define clk_cycle 1/Tst_clk  // Cycle time is 1/1000 = 0.001 s = 1 milisecond


//ARM instruction Array 
byte arm_instr[21];



void setup() {
  //Start the Serial Connection 
  Serial.begin(9600);
  
}

void loop() {
  byte outPrint;
  if(Serial.available() > 0) {
  char c = Serial.read();
  Serial.flush();
  if(c == 'S'){
    //Populate the Array
    readCode();
    Serial.println("Get Data from TDO Line:");
    int i;
    for(i=0; i < sizeof(arm_instr); i++){
    
    sndbyteTCK(arm_instr[i]);
    
    }
  }
  }
}

/*
 * Dictionary containing the Firmware Assembly Codes.
 * The Code is in arm_instructs.txt and is a binwalk of 
 * all the executable code found in the binary file.
 * I took an abbreviated version of the codes for time
 * constraints.
 * 
 * The Code is ARM Thumb 16-bit Instruction Set
 *    - Pdf Available in rbs/bin_study/QRC0006_UAL16.pdf
 *    - OP Codes are correct
 */ 
void readCode(void){
                              //  Loc            ARM                   Binary
  arm_instr[0]   = B01000001; //  0x107          adds r1, #0x36        0100 0001 00110110
  arm_instr[1]   = B00110110;         
  arm_instr[2]   = B01000000; //  0x109          adds r0, #0x30        0100 0000 00110000     
  arm_instr[3]   = B00110000; 
  arm_instr[4]   = B01101100; //  0x10B          ldr r3, [r4, #0x44]   0110 1100 11000100
  arm_instr[5]   = B11000100;  
  arm_instr[6]   = B01100010; //  0x10D          ldr r6, [r5, #0x40]   0110 0010 11000000
  arm_instr[7]   = B11000000;  
  arm_instr[8]   = B01100000; //  0x111          ldr r0, [r0, #0x60]   0110 0000 10000000
  arm_instr[9]   = B10000000;  
  arm_instr[10]  = B11100000; //  0x113          movs r0, r0           1110 0000 00000000
  arm_instr[11]  = B00000000;  
  arm_instr[12]  = B01000001; //  0x147          adds r1, #0x36        0100 0001 00110110
  arm_instr[13]  = B00110110; 
  arm_instr[14]  = B01000000; //  0x149          adds r0, #0x30        0100 0000 00110000
  arm_instr[15]  = B00110000; 
  arm_instr[16]  = B01101001; //  0x14B          ldr r5, [r4, #0x74]   0110 1001 11010110
  arm_instr[17]  = B11010110; 
  arm_instr[18]  = B01101100; //  0x14D          ldr r6, [r5, #0x50]   0110 1100 10010000
  arm_instr[19]  = B10010000; 
  arm_instr[20]  = B01100000; //  0x151          ldr r0, [r0, #0x60]   0110 0000 11000000
  arm_instr[21]  = B11000000; 
  
}

/*
 * This method will toggle TCK on the 8th bit of the given Freq. and send
 * the byte.
 * Since I can't multi thread with an Arduino I will read the Byte when 
 * TCK = 1
 * 
 * 
 */

void sndbyteTCK(byte toSnd){
    byte out;
    TCK = 1;
    Serial.println(toSnd,BIN);
    delay(clk_cycle * 8); // Hold for clock period
    TCK = 0;
    delay(clk_cycle * 8); // Hold for clock period
}

/*
 * This command will send bits on TCK but for time constraints is not implemented fully.
 * 
 * This method will set the test clock for the JTAG line
 * Normally the lowest test clock on the line is used,
 * and generally is around 10-100 Mhz
 * 
 * 
 * 
 * 
 */

void sndBitTCK(byte bitToSnd ){
    
    //TCK = 1;
    delay(clk_cycle); // Hold for clock period
    //Serial.println(bitToSnd);
    //TCK = 0;
    delay(clk_cycle); // Hold for clock period

}



