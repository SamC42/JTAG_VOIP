#include <Wire.h>
int p2  = 2;
int p3  = 3;
int p4  = 4;
int p5  = 5;
int p6  = 6;
int p7  = 7;
int p8  = 8;
int p9  = 9;
int p10 = 10;
int p11 = 11;
int store2 = 0;
int store3 = 0;
int store4 = 0;
int store5 = 0;
int store6 = 0;
int store7 = 0;
int store8 = 0;
int store9 = 0;
int store10 = 0;
int store11 = 0;

// Generally, you should use "unsigned long" for variables that hold time
// The value will quickly become too large for an char to store
unsigned long previousMillis = 0;        // will store last time LED was updated

// constants won't change :
const long charerval = 1000;           // charerval at which to blink (milliseconds)


void setup() {
  /* Serial Attempt
  Serial.begin(9600);
  pinMode(p2,INPUT);
  pinMode(p3,INPUT);
  pinMode(p4,INPUT);
  pinMode(p5,INPUT);
  pinMode(p6,INPUT);
  pinMode(p7,INPUT);
  pinMode(p8,INPUT);
  pinMode(p9,INPUT);
  pinMode(p10,INPUT);
  pinMode(p11,INPUT);
  unsigned long timer;
  */
  /*
   * I2C Attempt
   */
  Wire.begin();
  Serial.begin(9600);
  

   
}

void loop() {
  /*SERIAL ATTEMPT
  if(Serial.available()){
  // put your main code here, to run repeatedly:
 // unsigned long currentMillis = millis();

  //if (currentMillis - previousMillis >= charerval) {
    // save the last time you blinked the LED
    //previousMillis = currentMillis;
    
      //store2= analogRead(p2);
      //store3= analogRead(p3);
      //store4= analogRead(p4);
      //store5= analogRead(p5);
      //store6= analogRead(p6);
      //store7= analogRead(p7);
      //store8= analogRead(p8);
      //store9= analogRead(p9);
      //store10= analogRead(p10);
      //store11= analogRead(p11);
      //Serial.println(" Pin 2: " + store2);
      //Serial.println("Pin 3: " + store3);
      //Serial.println("Pin 4: " + store4);
      //Serial.println(" Pin 5: " + store5);
      //Serial.println(" Pin 6: " + store6);
      //Serial.println(" Pin 7: " + store7);
      //Serial.println("Pin 8: " + store8);
      //Serial.println("Pin 9: " + store9);
      //Serial.println("Pin 10: " + store10);
      char incoming = Serial.read();
      Serial.println("INcoming: " + incoming);
      //Serial.println(" Pin 11: " + store11);      
      //Serial.println();
      //Serial.println();  
    }
  */
  /*
   * I2c Attempt
   * 
   */
  char c = Wire.read();
  Serial.println(c);
  

}
