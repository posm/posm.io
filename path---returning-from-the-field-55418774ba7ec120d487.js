webpackJsonp([4],{"./node_modules/json-loader/index.js!./.cache/json/returning-from-the-field.json":function(e,t){e.exports={data:{site:{siteMetadata:{title:"POSM - Portable OpenStreetMap"}},markdownRemark:{id:"/Users/seth/src/posm/posm.github.io/src/pages/returning-from-the-field/index.md absPath of file >>> MarkdownRemark",html:'<p>When you’ve completely finished with a field project (or are returning to periodic internet use), the following steps need to happen:</p>\n<ol>\n<li>OMK data should be cleaned and uploaded to local OSM (see <a href="needs%20link">In the field</a> section)</li>\n<li>Edits to local OSM (from iD, JOSM, and OMK) must be pushed to online-OSM. Between the time you created the AOI export to the time you are ready to push the data back, OSM users in online environments may have created changes to the map. Rather than overwriting this, you will need to go through a conflict detection process. To handle this, we’ve developed what we call the “POSM replay tool”.</li>\n</ol>\n<h2>POSM replay tool</h2>\n<p>The POSM replay tool requires some command line knowledge and familiarity with GitHub. <a href="mailto:contact@posm.io">Reach out</a> if you get to this step and need some pointers.</p>\n<p>The complete instructions are <a href="https://github.com/americanredcross/posm-replay-tool">here</a> and you can read more about the concepts and mechanics behind the process <a href="https://hi.stamen.com/merging-offline-edits-with-the-posm-replay-tool-2f39a4410d2a#.47nht8th2">here</a>.</p>\n<p>In general, the replay process works as follows:</p>\n<ol>\n<li>Obtain an AOI extract (PBF or XML) corresponding to the point where the local OSM API branched from. (This is the PBF file you created through the AOI export and used to set up your POSM deployment )</li>\n<li>Gather local changesets.</li>\n<li>Initialize a git repository containing locally-modified entities present in the AOI extract.</li>\n<li>Obtain an AOI extract containing current data from your upstream (use export.posm.io and follow the same steps you did to create your POSM deployment in the first place… but with current data).</li>\n<li>Extract and apply changes to locally-modified entities from the current AOI extract.</li>\n<li>Create a branch representing the local history by applying all local changesets to a branch containing the starting AOI extract.</li>\n<li>Apply each local changeset to the branch containing the current AOI extract.</li>\n<li>Manually resolve merge conflicts between local and upstream edits.</li>\n<li>Submit resolved changesets to your upstream API, renumbering references to locally-created entities as necessary.</li>\n</ol>\n<p>We are still improving and fine-tuning this part of the POSM workflow, and we would be interested in your feedback and experience with it.</p>',frontmatter:{title:"Returning from the field",splash_image:{children:[{responsiveResolution:{src:"/guide/a50bf9a5b0cb605937c08f6805ad96db-4da33.jpg",srcSet:"/guide/a50bf9a5b0cb605937c08f6805ad96db-4da33.jpg 1x,/guide/a50bf9a5b0cb605937c08f6805ad96db-0880b.jpg 1.5x,/guide/a50bf9a5b0cb605937c08f6805ad96db-0b126.jpg 2x,/guide/a50bf9a5b0cb605937c08f6805ad96db-f881f.jpg 3x"}}]},splash_text:null}}},pathContext:{slug:"/returning-from-the-field/"}}}});
//# sourceMappingURL=path---returning-from-the-field-55418774ba7ec120d487.js.map