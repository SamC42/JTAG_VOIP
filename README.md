# README #

### This project took a look athe Grandstream VoIP phone and it's vulnerabilities###

I ran through sever tests to gain access into the system, the last attempt being the most promising. I kept 
a journal of my thought process and progress located at log/journal.txt. I documented the Attempts below and
added results of each test.

## Attempts: ##

###  Exploit the CVE - 2013 - 4421 Vulnerability ###

This attempt can be found in dropbear_packet/packet.c and was an attempt to inspect the documented
vulnerability to gain access into the system. 

Results: Was able to break out the method and understand the compression relating to ssh but was not able
	 to find a way to exploit the vulnerability.

### General Tests ###

* Brute force root access was done but to no avail. 
* Phone discovery and menu hacking such as checking the voicemail, html access,
	and looking for hidden menus on the phone.

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




	


* dropbear_ck has 0.58 and 0.59 versions of dropbear
* dropbear_packet has the packet hack attempt (attempted to test pack vulnerability (cart before the horse situation))
* hardware_ck - Most promising. Attempt to establish a serial connection to login locally instead of remotely. 
* log - contains the journal file to keep notes/track progress
* bin_study - Binary File discovery attempt
* 


### Who do I talk to? ###

* Smores 
*
