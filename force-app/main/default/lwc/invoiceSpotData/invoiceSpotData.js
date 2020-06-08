import { LightningElement,track } from 'lwc';
import readCSV from '@salesforce/apex/InvoiceSpotDataMatchUploader.readCSVFile';
import Id from '@salesforce/user/Id';

export default class InvoiceSpotData extends LightningElement {
    @track fileUploaded = false
    @track myRecordId = Id;
    @track batchId

    clickHandler = (event) => {
        this.template.querySelector('.section.collapsible').classList.toggle('collapsed');
    }

    async uploadHandler(event){
        
        // Get the list of uploaded files
        const uploadedFiles = event.detail.files;
        const id = uploadedFiles[0].documentId
        const eventDetail = event.detail
        const spinnerHandler = new CustomEvent('spinnerhandler')
        this.dispatchEvent(spinnerHandler)   
        window.console.log('upload handled')      
        readCSV({idContentDocument: id})
        .then( result => {
            this.batchId = result
            this.fileUploaded = true
            window.console.log(`batch id: ${this.batchId}`)
            this.dispatchEvent(spinnerHandler)  
        })
    }
}