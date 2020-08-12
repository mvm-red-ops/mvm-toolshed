import { LightningElement,api } from 'lwc';

export default class FileUploadToolshed extends LightningElement {
    @api myRecordId
    @api uploadHandler
    @api spinnerHandler
    @api eventTitle
    @api uploadTitle

    handleUploadFinished = (event) => {
        event.preventDefault()
        window.console.log('this.eventTitle: ', this.eventTitle)
        const eventDetail = event.detail
        const fileUploadEvent = new CustomEvent(this.eventTitle, {
            detail: eventDetail
        })

        this.dispatchEvent(fileUploadEvent) 
    }
}