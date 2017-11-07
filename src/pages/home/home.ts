import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  }

  items: any = [{
    "date": "Tue Nov 7 2017 00:00:00 GMT+0530 (IST)",
    "actvities": [
      {
        "activityName": "Transcript Application & Form Upload",
        "status": "open",
        "priority": "High",
        "editable": true
      },
      {
        "activityName": "LOR From HR",
        "status": "open",
        "priority": "Medium",
        "editable": true
      },
      {
        "activityName": "SOP ",
        "status": "open",
        "priority": "High",
        "editable": true
      }

    ]
  }
    // {
    //   "date": "Thu Aug 31 2017 00:00:00 GMT+0530 (IST)",
    //   "actvities": [
    //     {
    //       "activityName": "Activity 4",
    //       "status": "close",
    //       "priority": "High",
    //       "editable": true
    //     },
    //     {
    //       "activityName": "Activity 5",
    //       "status": "open",
    //       "priority": "medium",
    //       "editable": true
    //     },
    //     {
    //       "activityName": "Activity 6",
    //       "status": "close",
    //       "priority": "Low",
    //       "editable": true
    //     }

    //   ]
    // }
  ];

  addDay(date: any) {
    //Day must be added here
  };
  addActivity() {
    var date = new Date(),
      dateToString = date.toString(),
      i;
    date.setHours(0, 0, 0, 0);
    for (i = 0; i < this.items.length; i++) {
      var dateType = new Date(this.items[i].date);
      if (this.items[i].date == dateToString) {
        break;
      }
    };
    if (i < this.items.length) {
      var dummy = {
        "activityName": "Activity",
        "status": "open",
        "priority": "medium",
        "editable": true
      }
      this.items[i].actvities.push(dummy);
    }
    else {
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
      var x = {}
      this.items.push(dummyDay);
    }
  };
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
  };

  /* Refactor this code - > make 2 funstions one for edit and other for save*/
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
    }
  };

  //Toaster call function
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
}


/* Only for dev: To be deleted after development
API List : Listenig Port is 3000
Get all the data from the collection -> /getTodayData
Insert a new Task -> /insertTask
*/