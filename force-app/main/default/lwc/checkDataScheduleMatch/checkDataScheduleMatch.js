import { LightningElement,track } from 'lwc';
//import readCSV from '@salesforce/apex/CheckDataScheduleMatcher.readCSV';
import readCSV from '@salesforce/apex/CheckUploader.readCSV';
import Id from '@salesforce/user/Id';

export default class CheckDataScheduleMatch extends LightningElement {  
    @track fileUploaded = false
    @track myRecordId = Id;
    @track batchId
    @track returnMessage

    clickHandler = (event) => {
        this.template.querySelector('.section.collapsible').classList.toggle('collapsed');
    }

    async checkDataFileUploadHandler(event){
        window.console.log('uploading file checks..')
        // Get the list of uploaded files
        const uploadedFiles = event.detail.files;
        const id = uploadedFiles[0].documentId
        const eventDetail = event.detail
        const spinnerHandler = new CustomEvent('spinnerhandler')
        this.dispatchEvent(spinnerHandler)   

        window.console.log('upload handled')      
        readCSV({idContentDocument: id})
        .then( result => {
            
            window.console.log(`result: ${result}`)
            this.returnMessage = result
            this.fileUploaded = true
            this.dispatchEvent(spinnerHandler)   
        })

    }
}