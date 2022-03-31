# Horizon Studios Challenge

<p align="center">
<img src="https://codeworks.blob.core.windows.net/public/assets/cyber-range/labs/horizon-studios/logo.png" width="350">
</p>

Horizon Studios is an up and coming game development company. They recently launched a game called `Rivers Edge` which has taken the world by storm and has left the owners in dire need of assistance. With this sudden surge in popularity Horizon Studios is suffering from massive user demands, scalability and to the newly successful owners horror Cyber Security Breaches. With these concerns in mind Horizon Studios has decided to enlist your services to help identify their existing problems and implement the necessary fixes to keep their company in the Gamers Greenlight.

## Goals

In this checkpoint students will demonstrate a working knowledge of techniques used by cyber attackers and defensive tools to mitigate several risks and flaws within Horizon Studios. Your team has been contracted to provide ongoing cyber security monitoring and incident response services to Horizon Studios as its platform grows. You'll also need to determine the how cyber attackers have already compromised the system and to what information has already been compromised. With these goals in mind You'll need to implement the list of requirements below to protect Horizon Studios from further attacks.


### Existing Architecture

To help you get started Horzion Studios has provided the following diagram of services they use and how they are connected. You have been given a free scope of range probe or target any of these resources in your investigation. Horizon Studios has a firm non-negotiable tie to `AWS` and must therefore continue using this cloud service. 

---
***Service Map***

![reference](https://codeworks.blob.core.windows.net/public/assets/img/projects/KeeprUML.png)

---

### Business Rules and Functionality

We want give users some credit for creating an excellent `keep` to do that you will want to set up a way to keep track of the number of times a keep has been viewed, and how many times it has been added to any vault (kept). (as a stretch goal, when it is removed this count should be updated to go down as well).

Due to the privacy of our users, Vaults marked private may only be retrieved by the user who created the vault, there are a few places you will want to make a check on what vaults should be returned.

## Requirements

- Configure Proper IAM for all team members must be implemented using AWS best practices
  - Use root sparingly and with MFA, Administrator permissions OK
- Create a VPC for all Horizon Studios EC2 Instances
- Create a CIS compliant Windows Server 2019 DC EC2 Instance
  - Install MySQL Server here and create a database_schema
    - Create a table called `accounts` with the following fields (`id, name, email, picture`)
    - Ensure all data in this database is encrypted at rest and encrypted in transit
  - Ensure this EC2 instance is only accessible via RDP using a Key Pair
  - Install Sysmon to generate security-relevant system logs
- Create an Ubuntu EC2 instance 
  - Install nodejs version 16 or greater
  - Install and launch Web server --------------
  - Add and configure NGINX to host a website
    - Proxy port 3000 to port 80 in the NGINX configuration
  - Install and configure Snort to monitor incoming connections
    - Add a custom snort rule to alert invalid SSH attemps with the message `Ehhh, we don't talk about Bruto`
- Use AWS Control Tower to monitor these two instances
- Use Microsoft Threat Monitor to model this design and identify potential Problems.



## Legal Overview

The content under the CodeWorks®, LLC Organization and all of the individual repos are solely intended for use by CodeWorks Instruction to deliver Educational content to CodeWorks Students.

<br>

## Copyright - CodeWorks Security Labs

© CodeWorks® LLC, 2022. Unauthorized use and/or duplication of this material without express and written permission from CodeWorks, LLC is strictly prohibited.


<p align="center">
<img src="https://codeworks.blob.core.windows.net/public/assets/img/cyber/logos/cyber-logo.png?v=1" width="200">
</p>
