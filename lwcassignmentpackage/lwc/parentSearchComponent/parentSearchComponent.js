import { LightningElement,api, track } from 'lwc';
import getAccountList from '@salesforce/apex/parentSearchController.getAccountList';

export default class ParentSearchComponent extends LightningElement {
    @track varName;
    @track VarNumber;
    @api accountsList;
    @api error;
    constructor(){
        super();
    }

    handleChange(event) {
        if(event.target.name=='varName') 
        this.varName = event.target.value;
        if(event.target.name=='VarNumber')
        this.VarNumber = event.target.value;
    }
    
    handleSearch(e){
        console.log('Name'+this.varName);
        console.log('Number'+this.VarNumber);
        getAccountList({accName:this.varName,recordNumber:this.VarNumber})
            .then(result=>{
                console.log('result>>'+JSON.stringify(result));
                this.accountsList=result;
            })
            .catch(error =>{
                console.log('error>>'+JSON.stringify(error));
                this.error = error;
            });
    }
}