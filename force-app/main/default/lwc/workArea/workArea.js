import { LightningElement, api } from 'lwc';

export default class WorkArea extends LightningElement {
    @api selectedTool
    @api isLoading = false

    get invoiceSpotData() {
        if(!this.selectedTool){
            return null
        }
        else {      
            window.console.log(JSON.stringify(this.selectedTool))
            const matchBool = this.selectedTool.title === "Invoice Spot Data"
            return matchBool
        }
    }

    get checkDataScheduleMatch(){
        if(!this.selectedTool){
            return null
        }
        else {      
            window.console.log(JSON.stringify(this.selectedTool))
            const matchBool = this.selectedTool.title === "Check Data Schedule Match"
            return matchBool
        }
    }

    spinnerHandler(){
        this.isLoading = !this.isLoading 
    }


}