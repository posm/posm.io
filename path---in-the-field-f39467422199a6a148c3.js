webpackJsonp([7],{"./node_modules/json-loader/index.js!./.cache/json/in-the-field.json":function(e,n){e.exports={data:{site:{siteMetadata:{title:"POSM - Portable OpenStreetMap"}},markdownRemark:{id:"/Users/seth/src/posm/posm.github.io/src/pages/in-the-field/index.md absPath of file >>> MarkdownRemark",html:'<p>This section walks through the different POSM features: Editing OSM, Field\nPapers, OpenDataKit and OpenMapKit (including setting up mobile data collection\non Android phones, OpenDroneMap, key downloads, and the admin interface.</p>\n<h2>Planning fieldwork in general</h2>\n<p>Aside from the technology itself, there are a number of things that need to be\nconsidered for mapping fieldwork: the size of the area, number of enumerators\nneeded and time required, the data required and the data model for collecting\nit, etc. There’s also a lot of nuance in teaching people (especially in other\nlanguages/cultures) how to use different mapping tools. There are a variety of\nresources (including presentation and training materials) on the <a href="www.missingmaps.org">Missing Maps\nwebsite</a> which may be useful. You can also reach out to the\n<a href="mailto:contact@posm.io">American Red Cross GIS team</a> in advance and,\nif we have time, we may be able to talk through your project and provide\nsuggestions from past experiences.</p>\n<h2>Editing OSM</h2>\n<h3>Paper-based field mapping (Field Papers)</h3>\n<p><a href="http://fieldpapers.org/">Field Papers</a> creates a grid of atlas pages for an\narea which you can print off and use to walk around the target area and annotate\nthe paper map with missing buildings, address points, and any other relevant\nfeatures. Afterwards, you take a photo or scan each page and Field Papers will\nuse the QR code on each atlas page to georeference the area - it will appear as\na semi-transparent layer in iD editor or JOSM and you will need to digitally\ntrace your edits into the existing OSM data. The process is largely\nself-explanatory and documented in the actual Field Papers app.</p>\n<p>Creating an atlas (we usually size these so that a single page is no larger than\na few city blocks):</p>\n<p><img src="/guide/in-the-field/fieldpapers_aoi.jpg"></p>\n<p>Example of atlas page (we print these in black and white to save money/ink):</p>\n<p><img src="/guide/in-the-field/fieldpapers_atlas.jpg"></p>\n<p>Field Papers being used to record addresses in Dhaka, Bangladesh:</p>\n<p><img src="/guide/in-the-field/fieldpapers_dhaka.png"></p>\n<p>Field Papers has some great advantages. It’s great in areas where there may be\nmissing features (like buildings) that need to be added into OSM, or where you\nwant maximum flexibility for what information you want to collect. We also use\nField papers mapping in areas where security is a big concern and using\nsmartphones would make volunteers targets for theft. The main disadvantage of\nField Papers is that the data entry afterwards can be time-consuming, we often\nnotice spelling mistakes or other inconsistencies afterwards that require more\ntime to clean, and it can sometimes be difficult to enumerators to orient\nthemselves into the space on the map. For this reason, we prefer using digital\ntools like OpenMapKit.</p>\n<h3>Mobile data collection</h3>\n<p>There’s a variety of different apps and tools to support mobile data collection\nand mapping in the field. We prefer OpenDataKit (ODK) and OpenMapKit (OMK). We\noften find ourselves doing fieldwork where we have to collect the same pieces of\ninformation for all the buildings, schools, etc in an area, and OMK is designed\nto make this process fast and easy.</p>\n<h4>Setting up the phones</h4>\n<p>In terms of hardware, we use Blu Advance 5.0 phones. We’ve tried a lot of\ndifferent phones in the field, and the Blu’s are our favourite so far - cheap,\nhardy, easy to use, and they have a reliable GPS signal.</p>\n<p>Regardless of what type of phone you’re using, you will need to download the ODK\nand OMK apps. These are available through the posm.io homepage - simply connect\nyour phone to the POSM wifi to access them.</p>\n<p>POSM contains several other apps that can help with field mapping:</p>\n<ul>\n<li><a href="http://osmand.net/">OsmAnd</a>. This app provides offline maps and is extremely\nuseful for wayfinding and orientation. We also use this for planning travel\nand recording <a href="http://www.missingmaps.org/blog/2017/01/07/gps-tracks/">volunteers’\ntracks</a> during\nfieldwork.</li>\n<li><a href="https://opensignal.com/">OpenSignal</a>. This runs in the background to record\ncell phone signal strength when the home screen is in use. You can download\nthe data from the phones to see how the signal varied in your fieldwork area,\nand the data goes into OpenSignal’s crowdsourcing database.)</li>\n<li><a href="https://play.google.com/store/apps/details?id=com.domobile.applock&#x26;hl=en">AppLock</a>.\nIf you’re providing the phones and/or SIM cards for fieldwork, then you may\nwant to be able to control which apps can be used by enumerators and which\ncannot.</li>\n</ul>\n<h4>Setting up a form for OpenDataKit or OpenMapKit</h4>\n<p>Before you can use OpenDataKit/OpenMapKit, you need a survey form. There’s some\ndocumentation on the OpenDataKit website, but here’s a working example as well:</p>\n<p>This is a <a href="https://docs.google.com/spreadsheets/d/11H4-mGYTS61GLjSbVoTbmhoI5DjlF5fcBwNwQcvd2Go/edit#gid=1817602041_">basic buildings\nform</a>\nthat we use. It contains three tabs: “survey”, “osm”, and “settings” (which you\ncan ignore).</p>\n<p>The “survey” tab contains a series of ODK question types, most of which are\nrecorded in the background (e.g. start time, end time, date of survey, device\nID, etc.). The “osm building tags” question tells  ODK to launch the OpenMapKit\napp and to move to the “osm” tab in the workbook and look for the\n“building_tags” question.</p>\n<p><img src="/guide/in-the-field/odk_example.png"></p>\n<p>First, make any additions to the question types you need and what you want to\ncall them. Then, move to the “osm” tab. Here’s how it works:</p>\n<p><img src="/guide/in-the-field/odk_explanation.png"></p>\n<p>What this looks like: an enumerator will open ODK to conduct a survey. After\nrecording all the background information (start time, etc), ODK will hit the\n“osm” question type and prompt the user to launch OpenMapKit. At this point, the\nuser will see a map interface with his/her GPS location and the OSM\nbuildings/features surrounding him/her. When the user taps on a building, they\nwill see all the OSM tags that currently exist for that building. They will then\nswipe through the survey, which contains one screen for each of the fields in\nthe orange box (building, name, etc). Each of those fields will have\npre-populated choices from the purple box. These correspond to OSM key:value\npairs, but may be labeled differently in order to make sense to the user.</p>\n<p>If you need help deciding what key:value pairs you need to record (and how to\nclassify things appropriately based on context), the <a href="http://wiki.openstreetmap.org/wiki/Main_Page">OSM\nwiki</a> and\n<a href="https://taginfo.openstreetmap.org/">TagInfo</a> are both great resources. We are\ncurrently adding these into the POSM core tools to make them available offline.</p>\n<p>Once you’ve set up your ODK/OMK form, save it as a <code>.xls</code> or <code>.xlsx</code> (Excel)\nworkbook. Access the posm.io homepage, navigate to OpenMapKit (where you’ll see\nthe existing forms and can access their submissions and the XLSX form that was\nused to create them). Click the three dots at the top-right of the screen and\nselect “Upload form”.</p>\n<p><img src="/guide/in-the-field/omk.png"></p>\n<p>You can then drag and drop your ODK Excel form to upload it. When it’s done,\nyou’ll see it added to the grid of forms in the main OpenMapKit Server menu.</p>\n<p><img src="/guide/in-the-field/omk_upload.png"></p>\n<h3>Using ODK/OMK on the phones</h3>\n<p>The first time you use a phone for a mobile data collection project, you have to\nget the survey deployment set up - this means map tiles, OSM data, and the\nODK/OMK form itself.</p>\n<p>This presentation walks through configuration of ODK and OMK:</p>\n<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 65.2103%;"><iframe src="//speakerdeck.com/player/58460643e97e4cbabf792b23136ab17b" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen scrolling="no"></iframe></div>\n<p>(You can <a href="/undefined.pdf">download the PDF version here</a>.)</p>\n<h4>Manually pushing data from phones to POSM</h4>\n<p>If for some reason the completed forms do not automatically send to POSM, then\nyou can push them manually. In the home screen for ODK, press the “Send\nfinalized forms” button. There will be a number in parentheses which indicates\nhow many unsent forms are on the device:</p>\n<p><img src="/guide/in-the-field/odk_collect.png"></p>\n<h3>Tying it all together</h3>\n<p>Once you’ve walked through this workflow on the phones to set them up, then they\nare tested and ready for field use. You will need to complete and save an\nODK/OMK form for every OSM feature that you survey, and can push these to the\nPOSM during/after fieldwork.</p>\n<h3>Working with data collected through ODK/OMK</h3>\n<h4>Viewing data, cleaning it, and submitting to OSM</h4>\n<p>For large amounts of data, there are certain tools and processes that can\nstreamline data cleaning.</p>\n<p>We documented our <a href="https://github.com/AmericanRedCross/workflows/blob/master/west-africa_data-cleaning.md">data cleaning\nworkflow</a>\nfor a project in West Africa. This is project-specific but my provide more\ndetailed instructions.</p>\n<p>Here’s a short summary:</p>\n<ol>\n<li>Retrieve the <code>.osm</code> file from OMK server and open in JOSM. Enable the\nToDoList and OpenData plug-ins for JOSM.</li>\n<li>Purge non-relevant features (features that don’t need to be cleaned, or\nfeatures outside a geographic area where you want to focus) using\n<code>CTRL+Shift+P</code>. <strong>Do not delete these features</strong>.</li>\n<li>Save the points and polygons as separate files.</li>\n<li>For point data: Clean any free-form text inputs. When entering data for\nthings like hospital names, town names, etc, enumerators sometimes use\ndifferent spelling of capitalization or include a typo. Use Open Refine to\nclean these columns individually. Open Refine looks for responses that are\nclose but not exactly the same, and allows you to group these and change them\nto a consistent spelling. Once you’re finished, export as a <code>.csv</code> file and\nre-open in JOSM (<code>File -> Open</code>, accept the coordinate system as WGS84). Make\nsure the points appear to be in the correct place, add a source tag to all\nyour new features (e.g. <code>source=Red Cross field survey</code>), then push the\nchanges to OSM.</li>\n<li>For polygon data: This is more tedious. Open Refine doesn’t play nice with\nXML input, so in the past we’ve cleaned the individual records in JOSM.\nThere’s room here for scoping out other data cleaning services or scripts\nthat might make it easier to convert from XML into a format that can be\ndigested through Open Refine and back again. Once you’ve cleaned the\npolygons, add the source tag (see step 4), address any validation errors that\noccur, and push to OSM.</li>\n<li>Save the <code>.osm</code> files you uploaded, for future reference.</li>\n</ol>\n<p>These steps will push changes to the OSM data kept on your local POSM. This\nmeans that you can create new Field Papers, OMK surveys, etc, which will\nincorporate these changes for future rounds of mapping.</p>\n<p>The local OSM copy is still separate from the online version, however, and will\nneed to be reconciled and synched when you return from the field to an area with\ninternet connectivity.</p>',frontmatter:{title:"In the Field",splash_image:{children:[{responsiveResolution:{src:"/guide/8e7927077ad24e551c023e5ff994b916-4da33.jpg",srcSet:"/guide/8e7927077ad24e551c023e5ff994b916-4da33.jpg 1x,/guide/8e7927077ad24e551c023e5ff994b916-0880b.jpg 1.5x,/guide/8e7927077ad24e551c023e5ff994b916-0b126.jpg 2x"}}]},splash_text:null}}},pathContext:{slug:"/in-the-field/"}}}});
//# sourceMappingURL=path---in-the-field-f39467422199a6a148c3.js.map