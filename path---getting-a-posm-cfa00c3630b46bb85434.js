webpackJsonp([8],{"./node_modules/json-loader/index.js!./.cache/json/getting-a-posm.json":function(e,t){e.exports={data:{site:{siteMetadata:{title:"POSM - Portable OpenStreetMap"}},markdownRemark:{id:"/Users/seth/src/posm/posm.github.io/src/pages/getting-a-posm/index.md absPath of file >>> MarkdownRemark",html:'<p>Interested in getting a POSM? This involves a little bit of DIY, but advanced\ntech skills are <strong>not</strong> required. This site has instructions that walk through\nthe whole process.</p>\n<p>First, you order the hardware kit (you’ll have to assemble a few things). Next,\nyou load the core software onto the device for a first-time install. This\ntransforms the unit into a POSM. After that, the POSM is ready to go and can be\nused over and over again.</p>\n<h2>Anatomy of a POSM</h2>\n<h3>Hardware</h3>\n<p>We used the following hardware components for the original version of POSM,\nwhich cost about $300 in total:</p>\n<ul>\n<li><a href="http://smile.amazon.com/gp/product/B00XPVQHDU">Intel NUC Kit - BOXNUC5PPYH</a> -\n2.6 GHz quad core Pentium (N3700, 6W TDP). It includes a basic case.</li>\n<li><a href="http://smile.amazon.com/gp/product/B00OAJ412U">Samsung 850 EVO 250GB</a></li>\n<li><a href="http://smile.amazon.com/gp/product/B00KQCOTCM">8GB 1600MHz DDR3L CL9 SODIMM</a></li>\n<li><a href="https://www.thinkpenguin.com/gnu-linux/wireless-n-dual-band-bluetooth-40-m2-ngff-combo-card">Wireless N Dual Band + Bluetooth 4.0 M.2 NGFF Combo\nCard</a> -\nThis is needed if you plan to have more than 14 devices connected at a time.\nReplace the stock wireless card with this.</li>\n</ul>\n<p>If you want to be able to use OpenDroneMap with POSM, then you will\nwant slightly more souped-up hardware with greater processing power.\nInstead of the NUC unit above, order the following, somewhat more expensive\nmodel:</p>\n<ul>\n<li><a href="https://smile.amazon.com/gp/product/B01DJ9XS52">Intel NUC kit - NUC6i7KYK</a></li>\n</ul>\n<h3>Software</h3>\n<p>Once you’ve ordered and assembled the components, you’ll load the device with a\ncore software package that transforms it into a POSM. The package includes the\ncore POSM software, all of the tools that POSM supports, and other\ndownloads/apps to support mapping and mobile data collection.</p>\n<p>The POSM download is\n<a href="https://posm.s3.amazonaws.com/releases/posm-0.7.0.iso">here</a> and instructions\nare in the following section.</p>\n<p>For developers: the POSM software is free, open-source, and available through\nthe <a href="https://github.com/posm">POSM GitHub organization</a> with technical\ndocumentation and a variety of other resources. If you want more technical info\nor a less GUI-oriented means of setting this up, then head over to GitHub.</p>\n<h3>Other things you will need</h3>\n<p>The POSM hardware is a mini-computer. To set it up for the very first time,\nyou’ll need to plug in the following:</p>\n<ul>\n<li>USB keyboard</li>\n<li>external monitor or TV with an HDMI input</li>\n<li>USB stick (minimum 4 GB)</li>\n</ul>\n<p>You’ll also need an internet connection with an ethernet cable to load an area\nof interest onto the POSM and set it up for the field.</p>\n<h2>First-time install</h2>\n<p>First, download the <a href="https://posm.s3.amazonaws.com/releases/posm-0.7.0.iso">core POSM\nsoftware</a>. This will\ndownload with the file name <code>posm-0.7.0.iso</code>. You need to move that onto a USB\nstick and extract it into a set of folders, but first you’ll have to change the\nUSB formatting (UEFI booting is the technical term for what’s being\nfacilitated).</p>\n<h3>Configuring the USB stick</h3>\n<h4>Mac</h4>\n<p>On a Mac, plug in your USB stick and open Disk Utility. Navigate to the USB\nstick and click “Erase”.</p>\n<p>Give the USB stick a name. Set the format to <code>MS-DOS (FAT)</code> and the scheme to\n<code>GUID Partition Map</code>. Then click “Erase”, which will delete all existing files\nand reformat the drive to make it compatible with the POSM. See below:</p>\n<p><img src="/guide/getting-a-posm/format.png"></p>\n<h4>Windows</h4>\n<p>On a PC, connect the USB drive, then go to “Computer” or “My Computer”,\nright-click the drive and select “Format…” from the menu. Set the drive to FAT.</p>\n<h3>Moving and extracting the POSM download (AKA “ISO file”) onto the USB stick</h3>\n<p>If you don’t use command line, then moving the POSM download bundle involves\ndownloading a file extractor to extract it (we use <a href="https://itunes.apple.com/us/app/the-unarchiver/id425424353?mt=12">The\nUnarchiver</a>\nfor Mac or <a href="http://www.7-zip.org/">7-Zip</a> for Windows).</p>\n<p>On a Mac, open The Unarchiver and navigate to the <code>Extraction</code> tab. Where it\nsays “Create a new folder for the extracted files”, select <code>Never</code>. The reason\nwe do this is because the POSM download has to be extracted and moved onto the\nUSB stick. Most file extractors will place extracted files into an overall\nfolder. The POSM unit can’t handle this, and you can’t just manually move\neverything one level up because there are hidden files that will get missed.</p>\n<p><img src="/guide/getting-a-posm/extraction.png"></p>\n<p>Use your extraction client (The Unarchiver or 7-Zip) to extract the download\n(<code>posm-0.7.0.iso</code>) onto the USB stick… again, making sure that the files do\nnot end up in an overall folder. On a Mac, you do this by right-clicking the\n<code>posm-0.7.0.iso</code> file and selecting <code>Open with...</code> … <code>The Unarchiver</code>. Set the\ndestination folder to the USB stick and press “Extract”.</p>\n<p>The contents of your USB stick should look like this:</p>\n<p><img src="/guide/getting-a-posm/finder.png"></p>\n<h3>POSM first-time install</h3>\n<p>Alright, you’re finally ready. Take the Intel NUC unit that you’ve assembled and\nplug in an external monitor, a keyboard, and the USB stick you’ve prepared. Turn\nthe power on.</p>\n<p>You’ll see a dark boot screen appear on your monitor with the Intel NUC logo and\na few options in the bottom-right corner. Press F10 when prompted. You’ll have\nto be quick on the draw with this because the prompt only lasts a few seconds.\nIf you miss it, then just turn the power off and try again.</p>\n<p>This will open a menu (see below) where you have to select which device to boot\nfrom. Use the arrow keys to select your USB stick, then hit enter.</p>\n<p><img src="/guide/getting-a-posm/boot.jpg"></p>\n<p>You’ll be prompted by a screen that says GNU GRUB at the top and asks if you\nwant to do an automated install. You do. You can also wait 10 seconds and it\nwill take matters into its own hands.</p>\n<p>That’s it. The software will install onto the NUC unit, transforming it into a\nPOSM. This can take several minutes. When it’s complete, you’ll be prompted with\na screen asking you for login credentials. You can log in if you want. The\nusername is <code>root</code> and password is <code>posm</code>.</p>\n<p>Finally, the screen will look like this when the whole process is complete. You\ncan now power-down the POSM, disconnect the USB stick and keyboard and monitor.\nIt is set up and ready for use.</p>\n<p><img src=""></p>\n<p>Reminder: you only need to do this the very first time you take your POSM out of\nits cardboard box and set it up (or upgrade the core POSM software). After that,\nit’s just a matter of loading areas of interest and creating deployments.</p>\n<p>Note: if you ever want to wipe and reinstall the core POSM software (to install\na new version, etc), then it’s the same process - prep the USB stick, plug in\nthe monitor etc, and press <code>F10</code> when prompted. The NUC unit will overwrite the\nexisting installation with new software from the USB stick.</p>',frontmatter:{title:"Getting a POSM",splash_image:{children:[{responsiveResolution:{src:"/guide/7c94c4e26d0e656d854dcfef85b3fc65-4da33.jpg",srcSet:"/guide/7c94c4e26d0e656d854dcfef85b3fc65-4da33.jpg 1x"}}]},splash_text:null}}},pathContext:{slug:"/getting-a-posm/"}}}});
//# sourceMappingURL=path---getting-a-posm-cfa00c3630b46bb85434.js.map