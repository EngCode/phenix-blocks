/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - 
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> Uploader [un-tested] <====*/
PhenixElements.prototype.uploader = function (options?:{
    type?:string,   //===> standard, advanced
    src?:string,    //===> Media Source [URL]
}) {
    //====> Loop Through Phenix Elements <====//
    this.forEach(uploader => {
        if(uploader.classList.contains('px-done')) return;
        //====> Options <====//
        let type = uploader.getAttribute('data-uploader') || options?.type || 'standard',
            controler = uploader.querySelector('input[type="file"]'),
            multiple  = uploader.getAttribute('multiple' || 'data-multiple'),
            placeholder = uploader.getAttribute('data-placeholder') || 'Drag and Drop your file to upload';

        //====> Standard Uploader <===//
        if (type == 'standard') {
            //====> When Select a file <===//
            controler.addEventListener('change', event => {
                //===> Get Files Names <===//
                var filePath = [];
                for (var i = 0; i < controler.files.length; ++i) filePath.push(controler.files[i].name);
                //===> Set Files Names <===//
                uploader.setAttribute('data-placeholder', filePath);
            });
        } else {
            //====> set Uploader Placeholder <====//
            Phenix(controler).insert('after', `<span>${placeholder}</span><ul class="files"></ul>`);

            //====> Change File Function <===//
            const changeFile = (files) => {
                //===> Get File Data <===//
                var filePath = [],
                    filesList = uploader.querySelector('.files'),
                    fileType,
                    fileUrl;
                //===> Set Files Data <===//
                for (var i = 0; i < files.length; ++i) {
                    filePath.push(files[i].name);
                    fileType = files[i].type.split('/');
                    fileUrl = URL.createObjectURL(files[i]);
                }
                //===> Reset File List <===//
                filesList.innerHTML = '';
                //===> Create Files List <===//
                filePath.forEach(file => {
                    //===> Create new File Item <===//
                    Phenix(filesList).insert('append', `<li>${file}</li>`);

                    //===> Handle Previews <===//
                    if(multiple === null) {
                        //===> Image Preview Mode <===//
                        if(fileType[0] === 'image') {
                            uploader.style.backgroundImage = `url(${fileUrl})`;
                            uploader.classList.add('image-mode');
                            //===> if Video , Reset <===//
                            if (uploader.classList.contains('video-mode')) {
                                uploader.classList.remove('video-mode');
                                uploader.querySelector('video')?.remove();
                            }
                        }
                        //===> Video Preview Mode <===//
                        if (fileType[0] === 'video') {
                            uploader.classList.add('video-mode');
                            var videoCheck = Phenix(controler).next('video');
                            //===> if video exist replace data else create new video <==//
                            if(videoCheck) videoCheck.remove();
                            Phenix(controler).insert('after', `<video controls><source src="${fileUrl}" type="video/${fileType[1]}"></video>`);
                            //===> if Image , Reset <===//
                            if (uploader.classList.contains('image-mode')) {
                                uploader.classList.remove('image-mode');
                                uploader.style.backgroundImage = null;
                            }
                        }
                    }
                });
                //===> File Type <===//
            };

            //====> Change File <===//
            controler.addEventListener('change', event => changeFile(event.target.files));

            //====> Highlight Droparea <===//
            controler.addEventListener('dragenter', event => uploader.classList.add('highlight'));
            controler.addEventListener('dragleave', event => uploader.classList.remove('highlight'));

            //====> Drop Files <===//
            controler.addEventListener('drop', event => {
                /*====> get Files <====*/
                var data = event.dataTransfer,
                    files = data.files;
                controler.files = files;
                uploader.classList.remove('highlight')
            });
        }
        //===> Done <===//
        uploader.classList.add('px-done');
    });
}