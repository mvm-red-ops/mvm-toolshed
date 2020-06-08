import { LightningElement, api, track } from 'lwc';

export default class Toolbelt extends LightningElement {
    @api selectedTool 
    @api tools

    toolSelectionHandler(event) {
        const toolSelectionEvent = new CustomEvent("toolselected", {
            detail: event.detail
        })
        this.dispatchEvent(toolSelectionEvent);
    }

    
}