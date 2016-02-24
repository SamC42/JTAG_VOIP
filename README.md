# README #

### This project took a look athe Grandstream VoIP phone and it's vulnerabilities###

I ran through sever tests to gain access into the system, the first attempt being the most promising. I kept 
a journal of my thought process and progress located at log/journal.txt. I documented the Attempts below and
added results of each test.

## Attempts: ##

### Direct Connection Hardware Intrusion   ###

Breaking open the phone I was able to see female headers on the board. After some discovery I noticed the 
odd amount of GND on one side and determined the connection must be a JTAG connection. Without a JTAG connection
I was unable to accurately see the signals coming from the DVF9918 which featured two ARM processors. I was able to
discover some Arduino code to help in the process and was able to learn more about JTAG. 

Without a Oscilliscope I was unable to accurately get a TCK signal or see the connection on the data line. If I this 
equipment and something like an FPGA I could program to be a JTAG interface I would have been able to see the test data,
assuming my JTAG assumption was correct. Once I had the data comming in In could set breakpoints and step though the process,
either looking for the given memory addresses in the Hints or attempting to ssh and jump away from the default program that
runs when you login with admin via ssh.

However I did write a Arduino program that attempted JTAG interfaceing, with a simulated set of instructions. I sent the instructions
serially based on TCK, once the data was received, the next version of the software should be able to send breakpoints and code back
across the serial connection. Ideally, If I had a strong connection I would be able to swap my simulation code with the actual code 
incoming and receive the code.

Code located in hardware_ck/src





###  Exploit the CVE - 2013 - 4421 Vulnerability ###

This attempt can be found in dropbear_packet/packet.c and was an attempt to inspect the documented
vulnerability to gain access into the system. 

Results: Was able to break out the method and understand the compression relating to ssh but was not able
	 to find a way to exploit the vulnerability.

### General Tests ###

* Brute force root access was done but to no avail. 
* Phone discovery and menu hacking such as checking the voicemail, html access,
	and looking for hidden menus on the phone.
* General tests and K vector analysis (from instructions)  can be found at misc/

### Firmware Analysis ###

* With the vanilla firmware for the phone downloaded I ran series of binwalk and hexdump commands 
	to hunt around for clues. 'binwalk -Y -I gxp1600fw.bin' became the most valuable as it presented me 
	with disassembled code from the firmware. 
	
	bin_study/ shows some outputs from the commands mentioned.
	arm_instructs.txt - Contains the ARM assembly code from the firmware
	hex.out           - hexdump of the firmware
	binwalk_out.txt   - Binwalk output of firmware


Results: I was able to see assembly instructions in the firmware but without stepping though the code I was unable
	 to make heads or tails of it.





	


