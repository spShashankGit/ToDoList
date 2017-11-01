import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
<<<<<<< HEAD
// Import HttpClientModule from @angular/common/http
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, public toastCtrl: ToastController, private http: Http) {
    }
    //Variable decleration 
    baseUrl: string = "http://localhost:3000";
    items: any = [{
        "date": "Wed Aug 30 2017 00:00:00 GMT+0530 (IST)",
        "actvities": [
            {
                "activityName": "SP",
                "status": "close",
                "priority": "High",
                "editable": true
            },
            {
                "activityName": "Activity 2",
                "status": "open",
                "priority": "Medium",
                "editable": true
            },
            {
                "activityName": "Activity 3",
                "status": "close",
                "priority": "Low",
                "editable": true
            }

        ]
    },
    {
        "date": "Thu Aug 31 2017 00:00:00 GMT+0530 (IST)",
        "actvities": [
            {
                "activityName": "Activity 4",
                "status": "close",
                "priority": "High",
                "editable": true
            },
            {
                "activityName": "Activity 5",
                "status": "open",
                "priority": "medium",
                "editable": true
            },
            {
                "activityName": "Activity 6",
                "status": "close",
                "priority": "Low",
                "editable": true
            }

        ]
    }
    ];

    addDay(date: any) {
        console.log("Day must be added!");
    };
    addActivity() {
        var date = new Date();
        date.setHours(0, 0, 0, 0);
        var dateToString = date.toString();
        var i;

        for (i = 0; i < this.items.length; i++) {
            var dateType = new Date(this.items[i].date);
            // console.log("i " , i ,this.items.length , (this.items[i].date == dateToString), this.items[i].date, date);
            if (this.items[i].date == dateToString) {
                // console.log("Matched at ",i )
                break;
            }

        };
        console.log(" i is ", i);
        if (i < this.items.length) {
            // console.log("If - the date is already registered");
            var dummy = {
                "activityName": "Activity",
                "status": "open",
                "priority": "medium",
                "editable": true
            }
            // console.log("Inside IF ",this.items)
            this.items[i].actvities.push(dummy);
        }
        else {
            // console.log("Else- Date is not registered");
            var dummyDay = {
                "date": date,
                "actvities": []
            };
            var dummyActivity = {
                "activityName": "Activity",
                "status": "close",
                "priority": "medium",
                "editable": true
            };
            dummyDay.actvities.push(dummyActivity);
            // console.log("dummyDay ",dummyDay, this.items);
            var x = {}
            this.items.push(dummyDay);
            // console.log("items ",this.items);
            // break;
        }
    };
    // console.log("Add an activity ",this.items,date);
    // };
    reorderItems(indexes, array) {
        let element = array[indexes.from];
        array.splice(indexes.from, 1);
        array.splice(indexes.to, 0, element);
    };

    //toggle task status
    toggleTaskStatus(activity: any) {
        if (activity.status === "close") {
            activity.status = "open";
        }
        else {
            activity.status = "close";
        }
    };
    //Set Priority
    setPriority(pri: string, activity: any) {
        if (pri === "High") {
            activity.priority = "High"
        }
        else if (pri === "Medium") {
            activity.priority = "Medium"
        }
        else if (pri === "Low") {
            activity.priority = "Low";
        }
    };
    //Return date difference
    dateDifference(first: any, second: any) {
        var dateFirst = new Date(first);
        dateFirst.setHours(0, 0, 0, 0);
        var dateSecond = new Date(second);
        dateSecond.setHours(0, 0, 0, 0);

        var toStringDateFirst = dateFirst.toString();
        var toStringSecondFirst = dateSecond.toString();
        let diffInMs: number = Date.parse(toStringDateFirst) - Date.parse(toStringSecondFirst);
        return (diffInMs);
    }
    //Edit or save activity name
    editSaveActivityName(date: any, activity: any, state: string) {
        console.log("editSaveActivityName caleed!");
        if (state == 'edit') {
            activity.editable = false;
            let today = new Date();
            var diff = this.dateDifference(date, today)
            if (diff == 0) {
                activity.editable = true;
            }
            else {
                console.log("You are not allowed to change this item");
                this.presentToast("You are not allowed to change this item", 3000);
            }
            // console.log("diff ",diff , activity);
        }
    };

    //Toaster Class
    presentToast(msg: string, nanoSec: number) {
        if (!nanoSec)
            nanoSec = 3000;
        let toast = this.toastCtrl.create({
            message: msg,
            duration: nanoSec,
            position: 'middle'
        });
        toast.present();
    }
    //Get Today's data
    // getToday() {
    //     var url = this.baseUrl + '/getAllData'
    //     this.http.get(url)
    //         .subscribe(data => {
    //             console.log("data", data);
    //         });
    // };
=======
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {
  }

  items: any= [{
    "date":"Wed Aug 30 2017 00:00:00 GMT+0530 (IST)",
    "actvities":[
      {
        "activityName":"Activity 1",
        "status":"close",
        "priority":"High",
        "editable":true
      },
      {
        "activityName":"Activity 2",
        "status":"open",
        "priority":"Medium",
        "editable":true
      },
      {
        "activityName":"Activity 3",
        "status":"close",
        "priority":"Low",
        "editable":true
      }
    
    ]
  },
  {
    "date":"Thu Aug 31 2017 00:00:00 GMT+0530 (IST)",
    "actvities":[
      {
        "activityName":"Activity 4",
        "status":"close",
        "priority":"High",
        "editable":true
      },
      {
        "activityName":"Activity 5",
        "status":"open",
        "priority":"medium",
        "editable":true
      },
      {
        "activityName":"Activity 6",
        "status":"close",
        "priority":"Low",
        "editable":true
      }
    
    ]
  }
];

  addDay(date:any){
    console.log("Day must be added!");
  };
  addActivity(){
    var date = new Date();
    date.setHours(0,0,0,0);
    var dateToString = date.toString();
    var i;

    for (i=0;i<this.items.length;i++){
      var dateType = new Date (this.items[i].date);
      // console.log("i " , i ,this.items.length , (this.items[i].date == dateToString), this.items[i].date, date);
      if (this.items[i].date == dateToString){
        // console.log("Matched at ",i )
        break;
      }
        
    };
    console.log(" i is ",i);
      if (i<this.items.length){
        // console.log("If - the date is already registered");
        var dummy = {
          "activityName":"Activity",
          "status":"open",
          "priority":"medium",
          "editable":true
        }
        // console.log("Inside IF ",this.items)
        this.items[i].actvities.push(dummy);
      }
      else{
        // console.log("Else- Date is not registered");
        var dummyDay = {
          "date":date,
          "actvities":[]
        };
        var dummyActivity = {
          "activityName":"Activity",
          "status":"close",
          "priority":"medium",
          "editable":true
        };
        dummyDay.actvities.push(dummyActivity);
        // console.log("dummyDay ",dummyDay, this.items);
        var x = {}
        this.items.push(dummyDay);
        // console.log("items ",this.items);
        // break;
      }
    };
    // console.log("Add an activity ",this.items,date);
  // };
  reorderItems(indexes,array) {
    let element = array[indexes.from];
    array.splice(indexes.from, 1);
    array.splice(indexes.to, 0, element);
  };

  //toggle task status
  toggleTaskStatus(activity:any){
    if ( activity.status==="close"){
      activity.status = "open";
    }
    else{
      activity.status="close";
    }
  };
  //Set Priority
  setPriority(pri:string,activity:any){
    if(pri === "High"){
      activity.priority = "High"
    }
    else if(pri === "Medium"){
      activity.priority = "Medium"
    }
    else if(pri === "Low"){
      activity.priority = "Low";
    }
  };
  //Return date difference
  dateDifference(first:any,second:any){
    var dateFirst = new Date (first);
    dateFirst.setHours(0,0,0,0);
    var dateSecond = new Date (second);
    dateSecond.setHours(0,0,0,0);

    var toStringDateFirst = dateFirst.toString();
    var toStringSecondFirst = dateSecond.toString();
    let diffInMs: number = Date.parse(toStringDateFirst) - Date.parse(toStringSecondFirst);
    return (diffInMs);
  }
  //Edit or save activity name
  editSaveActivityName(date:any,activity:any,state:string){
    console.log("editSaveActivityName caleed!");
    if (state=='edit'){
      activity.editable=false;
      let today = new Date();
      var diff = this.dateDifference(date,today)
      if(diff == 0){
        activity.editable=true; 
      }
      else{
        console.log("You are not allowed to change this item");
        this.presentToast("You are not allowed to change this item",3000);
      }
      // console.log("diff ",diff , activity);
    }
  };

  //Toaster Class
  presentToast(msg:string,nanoSec:number) {
    if (!nanoSec)
      nanoSec = 3000;
    let toast = this.toastCtrl.create({
      message: msg,
      duration: nanoSec,
      position:'middle'
    });
    toast.present();
  }
>>>>>>> a29c0dd76990942da99f773d47908678583a6325
}
