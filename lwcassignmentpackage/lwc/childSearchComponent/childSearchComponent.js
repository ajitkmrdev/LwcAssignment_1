import { LightningElement,track,api } from 'lwc';

export default class ChildSearchComponent extends LightningElement {
    @api accountListParent;
    @track accountListName=[];
    @track newNameList=[];
    @track varFilterText;
    @track filterEnable = false;
    @track allAccountListEnable = true;
    handleOnChange(event){ //method to capture value from filter text box
        this.varFilterText=event.target.value;
    }
   
    //method to short account list based on value provided in filter tex box
    handleFilter(){
        this.filterEnable=true;
        this.allAccountListEnable=!this.filterEnable;
        for(var i of this.accountListParent){
            var nameValueCheck = i.Name;
            if(nameValueCheck.indexOf(this.varFilterText) !=-1 ){
                this.accountListName.push(i.Name);
            }
        }
        this.newNameList = this.accountListName;
        
    }
}
