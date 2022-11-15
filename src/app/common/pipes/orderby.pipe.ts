import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {
  transform(items:[],direction:string,column:string,type:string){
    let sortedItems=[];
    try {
  
   
    // console.log("items",items)
    // console.log("direction",direction)
    // console.log("column",column)
    // console.log("type",type)

    sortedItems=direction==="asc" ?
    this.sortAscending(items,column,type):
    this.sortDescending(items,column,type)
       
   } catch (error) {
     
  }
 // setTimeout(() => {
    console.log("sortedItems",sortedItems[0]);
    return sortedItems[0];
 // }, 500);
   
    }
    sortAscending(items,column,type){
      return [items.sort(function(a:any,b:any){
      if(type==="string"){
      if (a[column].toUpperCase() < b[column].toUpperCase()) return -1;
      }
      else{
      return a[column]-b[column];
      }
      })]
      }
  
      sortDescending(items,column,type){
        return [items.sort(function(a:any,b:any){
        if(type==="string"){
        if (a[column].toUpperCase() > b[column].toUpperCase()) return -1;
        }
        else{
        return b[column]-a[column];
        }
        })]
        }
  
  }
 

