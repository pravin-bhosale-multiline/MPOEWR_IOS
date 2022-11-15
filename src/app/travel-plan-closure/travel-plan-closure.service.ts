import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TravelPlanClosureService {
  
  readonly TAG = 'TravelPlanClosureService';
  
  constructor(private http:HttpClient) { }


  public async getPlan(id:string) {
    let methodTAG = 'getPlan';
    try {
          return await this.http.get('assets/data/planMaster.json'); 
    } catch (error) {
      
    }
    
  }
  public async getExpenseMasterList(){
    let methodTAG = 'getExpenseMasterList';
    try {
          return await this.http.get('assets/data/expenseMasterList.json');
    } catch (error) {
      
    }
  }
  public getCompletedTaskList(){
    let methodTAG = 'getCompletedTaskList';
    try {
          return this.http.get('assets/data/Expense.json');
    } catch (error) {
      
    }
  }

}
