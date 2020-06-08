import { LightningElement, track } from 'lwc';
import readCSV from '@salesforce/apex/PPTrafficUploader.readCSVFile';

export default class MainToolshedWrapper extends LightningElement {
    @track selectedTool
    @track tools = [
      {
          title: "Invoice Spot Data",
          description: "Attach Invoice Numbers to Spot Data by uploading formtated CSV.",
          id: '1',
          selected: false
      },
      {
          title: "PDF Parser",
          description: "Break down Invoice PDFs into Flight Dates and Invoice Numbers.",
          id: '2',
          selected: false
      },
      {
          title: "CSV Parser",
          description: "Tranform Prelog Data CSVs from Agencies into DataLoader-ready CSV's.",
          id: '3',
          selected: false
      },      
      {
          title: "Sample Tool",
          description: "Testing Testing Testing.",
          id: '4',
          selected: false
    },
  ]

    toolSelectionHandler(event){
      let updatedTools
      const id = event.detail.id 
      const action = event.detail.action
      window.console.log(`id: ${id}, action: ${action}`)

      if( action === 'unselect'){
          updatedTools = this.tools.map( (tool) => {
              tool.selected = false
              return tool
          })
          this.selectedTool = null
      } else{
        updatedTools = this.tools.map( (tool) => {
              if(tool.id === id){
                  tool.selected = true
                  this.selectedTool = tool
              } 
              else {
                  tool.selected = false
              }
              return tool
          })
      }

      this.tools = updatedTools
    }

    handleFileUpload(event){
        window.console.log(JSON.stringify(event))
      }
      
}