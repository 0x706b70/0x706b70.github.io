# RC3 G0D, Pankaj Thakur (1337x1998)

He claims to have an [RCE on Microsoft Edge](https://web.archive.org/web/20210628124939/https://www.techpana.com/2021/90779/) which has become a really biased topic, since if any of the Microsoft products would be hit by an [RCE](https://en.wikipedia.org/wiki/Arbitrary_code_execution) over something then there should be a [CVE](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) assigned.



<p float="left" align="middle">
<img src="/images/microsoft-rce-1.png" width="384" />
<img src="/images/microsoft-rce-2.png" width="384" />
</p>



Where we do not see any sign of CVE but he claims to still have an RCE. **IF "YOU" ARE READING THIS, DO SEND A PULL REQUEST WITH A CVE NUMBER. NOT ONLY THIS, IF YOU WANNA PROVE YOURSELF. DO SEND A PULL REQUEST INSTEAD OF BRAGGING ABOUT IT WITH THE MEDIA.**

So, let's take a closer look at this.

## Offenses 🔴

- One of the most popular Github repo by him seems to be [plagiarised](https://en.wikipedia.org/wiki/Plagiarism) (replica/copy-paste). (Proof: [His Code](https://web.archive.org/web/20210628124555/https://github.com/Pankaj1337x1998/AES-chat), [Original Code Reference](https://web.archive.org/web/20210628125700/https://0x00sec.org/t/encrypted-chat-part-iii/7639) && [Original Code Repo](http://web.archive.org/web/20210628195641/https://github.com/spec-sec/SecureChat/) Code is absolutely same. He has violated the MIT License in original repository by removing the license and replacing it with Apache License 2.0.) [[Forked Proof](https://github.com/0x706b70/AES-chat)]
- Looks like he was just learning [subdomain takeover](https://developer.mozilla.org/en-US/docs/Web/Security/Subdomain_takeovers) in September 2019 ([Proof](https://web.archive.org/web/20210628124427/https://github.com/Pankaj1337x1998?tab=repositories) See the repo timelime after can-i-take-over-xyz fork)
- The personal website of the RICH ($$$$$) dude seemed to be hosted on [wix.com](https://wix.com/) for free ([Proof](https://web.archive.org/web/20210628024610/https://www.pankajinfosec.com/), [Another Proof](https://web.archive.org/web/20210628124002/https://www.pankajinfosec.com/blank) Wix banner is hidden from web archive thingy so see closely at the top)
- He faked his [OSCP](https://www.offensive-security.com/pwk-oscp/) (Proof: [His archived Twitter home page](https://web.archive.org/web/20210628024740/https://twitter.com/Nep_1337_1998) && [Original Tweet](https://twitter.com/areyou1or0/status/1085967880259362818) Even the emoji is copied and  ID `OS-42879` both are just same plus we did confirm it with [OffSec](https://www.offensive-security.com/) and they proved that it is fake)
![Comparison of PWK Exam Results from Busra Demir & Pankaj](/images/busra-pankaj-comparison.png)
- For some mysterious reason the **fake** OSCP tweet is deleted (His profile: [Now](https://twitter.com/Nep_1337_1998) && [Then](https://web.archive.org/web/20210628024740/https://twitter.com/Nep_1337_1998))
- He had made a CTF challenge in [IT Students of Nepal](https://github.com/itsnporg) which was again [plagiarised](https://en.wikipedia.org/wiki/Plagiarism). (Proof: [Original CTF write-up](https://github.com/jbe456/coding-challenge/blob/master/RingZer0Team/Forensics/20.md) && [His CTF](https://github.com/itsnporg/weekly_challenges/commit/b2687ad47f75419981e2ed53d78bc09c6e221ae6))
- His [so-called "Apple RCE"](https://web.archive.org/web/20210628153720/https://english.headlinenepal.com/details/3201) seemed to be just [Security Misconfiguration](https://owasp.org/www-project-top-ten/2017/A6_2017-Security_Misconfiguration) and [Cross-Site-Scripting](https://owasp.org/www-community/attacks/xss/) issues ([Proof](https://support.apple.com/en-us/HT201536) You may search for his name)
- He had claimed [Wannacry Ransomware](https://en.wikipedia.org/wiki/WannaCry_ransomware) to be an RCE ([Proof](https://web.archive.org/web/20210628153352/https://www.gadgetbytenepal.com/microsoft-edge-rce-vulnerability/))
- His tweet regarding Groovy Script too seemed to be plagiarised. (Proof: [His tweet](https://web.archive.org/web/20210628182802/https://twitter.com/Nep_1337_1998/status/1403780910227484675) && [Original Content](https://livebook.manning.com/book/penetrating-enterprise-networks/chapter-5/v-7/130) Check figure 5.10)

## Defenses 🔵

- He seemed to have **some** idea about security. 
- He has got **unverified** public exploits but again, [Unrestricted File Upload](https://cwe.mitre.org/data/definitions/434.html) and [SQL injection](https://en.wikipedia.org/wiki/SQL_injection) ([Proof](https://www.exploit-db.com/?author=10165))

## Ack 🟣

Looks like he isn't a newbie but his claims seemed to be just fake. His RCEs seemed to be fake proving he is fake. He is flexing his fake skills.

As far as we see, it seems he'd [manipulated DOM](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents) **manually** to flex it, along with it [spoofed E-mails](https://en.wikipedia.org/wiki/Email_spoofing) to fake things up.

After some incident regarding his authenticity checks, looks like he took his Twitter account down for a while and removed the Tweet (OSCP pinned tweet), and later [thanked TechPana](https://web.archive.org/web/20210628200858/https://twitter.com/Nep_1337_1998/status/1409476595241295873) for something mysterious 🤔

## Conclusion

And a sad little bitter truth about Nepalese media is that some time ago, it looks like someone was looking up information about bug bounty hunters featured in different Nepali media to analyze how they have portrayed the achievers, looks like an operation was conducted to verify the authenticity of the information published by them. Someone did a trial with TechPana by impersonating a **non-existing person** named "Niraj Bhattarai".

It seems a picture of Bangladeshi photographer "Devraj Kwsik" was used to represent Niraj Bhattarai. For the major focus of this non-existing character, it seems that it was planned to have him discovered a Dependency Confusion vulnerability in one of the open-source projects of Facebook, for which Facebook decided to award him a bounty of $15,000.

([Proof to the statement above](https://web.archive.org/web/20210627110211/https://www.techpana.com/2021/90847/))

This thing shows that TechPana didn't even look for the authenticity of the achievement and posted about it on their website and also shared it on their Facebook page (now deleted).

So, Nepalese media should work to check the authenticity of the source rather than just **reach**.

Along with that **Routine of Nepal Banda** should also STOP making people focus on **$$** since it is creating unwanted issues to the community. While we agree it is supposed to make things better and encourage people and for inspiration but we can inspire and encourage without actually disclosing **$$$$** 

## Misc

Pull Requests are welcome, for both translations and corrections. Thanks.
