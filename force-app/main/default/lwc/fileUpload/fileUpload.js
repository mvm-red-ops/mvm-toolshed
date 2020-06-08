import { LightningElement, api} from 'lwc';

export default class InvoiceSpotDataFileUpload extends LightningElement {
    @api myRecordId
    @api uploadHandler
    @api spinnerHandler

    handleUploadFinished = (event) => {
        event.preventDefault()
        const eventDetail = event.detail
        const fileUploadEvent = new CustomEvent('fileupload', {
            detail: eventDetail
        })

        this.dispatchEvent(fileUploadEvent) 
    }
}
