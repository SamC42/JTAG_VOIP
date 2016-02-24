/*
 * This Sketch Will Provide a Simulation of the Grandstream GXP1610 Model which has
 * the DSP Group Inc. DVF9918 Model SoC.
 * Steps to simulate:
 *          1. Download Firmware from the online directory and extract assembly inside 
 *              was extracted. 
 *          2. Convert Assembly to Binary
 *          3. Send on the rising edge of TCK the bits Serially
 * Since this is a simulation pins are not written to and the clocking is arbitrary, only 
 * selected to provide clean debugging serially.
 * 
 * 
 */

//JTAG Definitions
#define TMS 0  
#define TDI 0 
#define TDO 0 
#define TCK 0 //Clock is off   

#define Tst_clk 1000          // Clock is set to 1 Khz
#define clk_cycle 1/ Tst_clk  // Cycle time is 1/1000 = 0.001 s = 1 milisecond



void setup() {
  //Start the Serial Connection 
  Serial.begin(9600);
  
}

void loop() {
  //Run the Serial Clock 
  //setTCK(){}
  //Send a bit on the rising edge of the clock. 
  char c = Serial.read();
  if(c == 'S'){
    Serial.write(sendOneByte(true));
    Serial.println(Serial.read());
  }
}

/*
 * This method will set the test clock for the JTAG line
 * Normally the lowest test clock on the line is used,
 * and generally is around 10-100 Mhz
 * 
 * 
 * 
 */

void setTCK(void){
  
    //TCK = 1;
    delay(clk_cycle); // Hold for clock period
    //TCK = 0;
    delay(clk_cycle); // Hold for clock period

}

void runClk(void){
  
  setTCK();
  
}


/*
 * Dictionary containing the Firmware Assembly Codes.
 * 
 *  
 */
 
int readCode(int n){
  int one = B1;
  int zero = B0;
  if(n == 0){
    return one;  
  }
  if(n == 1){
    return zero;  
  }
  if(n == 2){
    return one;  
  }
  if(n == 3){
    return zero;  
  }
  if(n == 4){
    return one;  
  }
  if(n == 5){
    return zero;  
  }
  if(n == 6){
    return one;  
  }
  if(n == 7){
    return zero;  
  }
  

  
}


/*
 * Sends 8 bits on the clock edge of TCK 
 * 
 */
byte sendOneByte(bool snd){
  if(snd == true){
    
  int n;
  byte byte_out = B0000100; 
  for(n=0; n < 8;n++){
      //byte_out << readCode(n);
      
    
      }
  return byte_out;
  }
  
}





