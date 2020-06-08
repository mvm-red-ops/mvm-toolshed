import { LightningElement, api } from 'lwc';

export default class Toolcard extends LightningElement {
    @api toolSelectionHandler
    @api tool


    onClickToolSelectionHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const toolId = event.currentTarget.dataset.myId;
        const action =  !!this.tool.selected ? 'unselect' : 'select'
        const detailObj = {'id': toolId, 'action': action}
        const toolSelectionEvent = new CustomEvent("toolselected", {
            detail: detailObj
        })

        this.dispatchEvent(toolSelectionEvent);
    }

}