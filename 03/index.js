const fs = require('fs').promises;
const path = require('path')

async function readdir(rootdir){
    rootdir = rootdir || path.resolve(__dirname);
    const files = await fs.readdir(rootdir)
    walk(files, rootdir);
}
async function walk(files,rootdir){
    for( let file of files){
        const FileFullPath = path.resolve(rootdir, file)
        const stats =  await fs.stat(FileFullPath)

        if( stats.isDirectory()){
            readdir(FileFullPath)
            continue;
        }



        console.log(FileFullPath, stats.isDirectory());
    }


}
readdir('./');
