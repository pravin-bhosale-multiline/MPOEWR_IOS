import { Component, OnInit, NgZone } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { BusinessPartnerList, NeworderService, BPaddress } from '../neworder/neworder.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { NativeGeocoderOptions, NativeGeocoder, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment,
  Spherical,
  ILatLng
} from '@ionic-native/google-maps';
import { Commonfun } from '../../provider/commonfun';
import { Message } from '../../provider/message-helper';


import {LoginauthService,AllAct,customerheader,Port} from '../login/loginauth.service';
import {LocationFinderService} from './location-finder.service'

@Component({
  selector: 'app-location-finder',
  templateUrl: './location-finder.page.html',
  styleUrls: ['./location-finder.page.scss'],
})
export class LocationFinderPage implements OnInit {
  
  // This variable will hold the class name.
  readonly TAG = 'LocationFinderPage';
  //This varible will hold Customer list.
  selectedBusinessPartner: BusinessPartnerList;
  //
  latLongForm:FormGroup;
  //
  BusinessPartnerlist: any;
  // This variable will hold search text word count.
  reftextcount = 0;
  //
  BPaddressshipping: any=[];
  //
  selectedBPaddressshipping: BPaddress;
  //
  selectedAddressDropDown;
  //
  selectedAddress;
  txtselectedAddress;
  //
  showTxtAddress = false;
  //
  txtLatitude;
  //
  txtLongitude
  //
  showBtnConvertAddressToLatLong = false;
  //
  showBtnCaptureLatLong = false;
  //
  distance;

leastBusinessPartnerlist=null;
  validation_messages = { 
                          'selectedBusinessPartner': [{ type: 'required', message: ' *Please Select Customer.' }],
                          'selectedBPaddressshipping': [{ type: 'required', message: '*Please Select Shipping Address.' }]
                        }

  
  constructor( private fb: FormBuilder,
               private neworderservice: NeworderService,
               private geolocation: Geolocation,
               private platform: Platform,
               private nativeGeocoder: NativeGeocoder,
               private zone: NgZone,
               private loginauth:LoginauthService,
               private locationfinderservice:LocationFinderService,
               public commonfun: Commonfun,
               public msg:Message,
               private locationAccuracy:LocationAccuracy


             ) { 

                this.latLongForm = this.fb.group({
                  selectedBusinessPartner: [,Validators.required],
                  selectedBPaddressshipping: [,Validators.required]
                
                });
    
               }

  ngOnInit() {
    

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };

     
    let latlong1 =  <ILatLng>{}
    latlong1 
    latlong1.lat = 17.6599;
    latlong1.lng = 75.9064;

    let latlong2=  <ILatLng>{}
    latlong2.lat = 19.0760;
    latlong2.lng = 72.8777;
    //this.distance = Spherical.computeDistanceBetween(latlong1,latlong2);
    
    let km = this.distance / 1000;

  


////---------

if(this.msg.isplatformweb==true){
 // this.commonfun.chkcache('location-finder');
  setTimeout( () => {
    this.checkcust();
  },3000);
}
else{
  this.checkcust();
}
//-------


    
  }
  ionViewWillEnter(){
    
  }
  /**
   * @kind function
   * @summary This method will save data to server.
   * @since 1.0.0
   * @returns void
   * @public
   * @module Travel Expense
   * @author Pravin Bhosale
   * @classdesc  LocationFinderPage
   */
  public saveForm(val):void {
  let methodTAG = 'latlongSubmit';  
  try {
            //localhost:8080/openbravo/ws/in.mbs.webservice.WMobileLatLongUpdate?addid=FFF202005200405006176B076E5C7E39&lat=100&long=2006
        
    
        this.locationfinderservice.LatLongUpdate(this.selectedAddressDropDown.addressid,this.txtLatitude,this.txtLongitude).subscribe(data => {
          var response = data;
    if(response.status=="Success"){
      this.commonfun.presentAlert("Message","Success",response.msg);
      this.Resetpage();
    }
    else{
      this.commonfun.presentAlert("Message",response.status,response.msg);
    }
          
        },error=>{
        //  console.log(this.TAG,methodTAG,error)
          
          this.commonfun.presentAlert("Message","Error",error);
    
        });
    
    } catch (error) {
      console.log(this.TAG,methodTAG,error)	
      this.commonfun.presentAlert("Message","Error",error);
    }
  }
  onClose(event:{
    component: IonicSelectableComponent,
    text: any
  }){
event.component.searchText="";
  }

  /**
   * @kind function
   * @summary This method provides information about the device's location, such as latitude and longitud.
   * @param null
   * @public
   * @returns void
   * @module Travel Expense
   * @since 0.0.7
   * @see https://github.com/apache/cordova-plugin-geolocation
   * @author Pravin Bhosale 
   */
  public captureLatLong(){
    let methodTAG = 'captureLatLong';
    try {
    //  console.log(methodTAG);	


      if (this.msg.isplatformweb==false)
      {

      this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
        () => {
    this.geolocation.getCurrentPosition().then((resp) => {
          
          this.txtLatitude = resp.coords.latitude;
          this.txtLongitude = resp.coords.longitude;
        //  this.reverseGeocode(resp.coords.latitude,resp.coords.longitude);
      }).catch((error) => {
      //  console.log('Error getting location', error.message);	
       // this.commonfun.presentAlert("Message","Error",error.message);
      });
    },
    error => console.log('Error requesting location permissions ' + JSON.stringify(error))
  );

      }
      else{
        //pwa
        this.geolocation.getCurrentPosition().then((resp) => {
          
          this.txtLatitude = resp.coords.latitude;
          this.txtLongitude = resp.coords.longitude;
        //  this.reverseGeocode(resp.coords.latitude,resp.coords.longitude);
      }).catch((error) => {
      //  console.log('Error getting location', error.message);	
       // this.commonfun.presentAlert("Message","Error",error.message);
      });
      }
    } catch (error) {
    //  console.log(this.TAG,methodTAG,error);	
      this.commonfun.presentAlert("Message","Error",error);
    }
  }

  onAddChange(){
    try {
      
      if(!!this.selectedAddressDropDown.addressname){
        this.txtselectedAddress = this.selectedAddressDropDown.addressname;
        this.showBtnConvertAddressToLatLong = false;
        this.showBtnCaptureLatLong = true;
      } else {
        this.showBtnCaptureLatLong = false;
        this.txtselectedAddress =null
        this.showBtnConvertAddressToLatLong = false;
      }
    } catch (error) {
      
    }
  }


  public convertAddressToLatLong(){
    let methodTAG = 'convertAddressToLatLong';
    try {
      this.selectedAddress =this.latLongForm.controls["selectedBPaddressshipping"].value	
      if(this.selectedAddress) {	
        this.forwardGeocode(this.selectedAddress.addressname);
      }    
      
    } catch (error) {
     // console.log(this.TAG,methodTAG,error);	
      this.commonfun.presentAlert("Message","Error",error);	
 
    }
  }
  /**
   * @kind function
   * @description This method will fire when user will enter something on search box.
   * @public
   * @param $event
   * @returns void
   * @module Travel Expense
   * @since 1.0.0
   * @author Pravin Bhosale.
   */
  public onCustDropDownSearch(event: {component: IonicSelectableComponent,text: any}):void {
    let methodTAG = 'onCustDropDownSearch';
    try {
     // console.log("onCustDropDownSearch");

          this.reftextcount++;
          
          let custsearchtext = event.text;
          if(custsearchtext.length % 3==0) {

              this.bindCustomerFromApi(custsearchtext);
              this.reftextcount = 0;
          }
        

    } catch (error) {
    //  console.log(this.TAG,methodTAG,error);	
      this.commonfun.presentAlert("Message","Error",error);
    }
  } 
  /**
  * @kind function
  * @description This method will trigger when user will tap on list item in the drop down.
  * @public
  * @param $event
  * @returns void
  * @module Travel Expense
  * @since 1.0.0
  * @author Pravin Bhosale. 
  */
 // public onCustDropDownChange(selectedBusinessPartner){
  public onCustDropDownChange(event: {component: IonicSelectableComponent,value: any}):void {
    let methodTAG = 'onCustDropDownChange';
    try {
    //  console.log("onCustDropDownChange");
    // console.log("onCustDropDownChange:",event.value);
          this.getCustomerAddress(event.value);  
    } catch (error) {
    //  console.log("Error:onCustDropDownChange",error);
    }
  }
  /**
   * @kind function
   * @description This method will fetch customer list from server and bind it local varibale.
   * @private
   * @param strsearch
   * @returns void
   * @module Travel Expense
   * @since 1.0.0.
   * @author Pravin Bhosale.
   */
  private bindCustomerFromApi(strsearch: string) {
    let methodTAG = 'bindCustomerFromApi';
    try {
          if(strsearch!="") {
            this.locationfinderservice.getUserWiseCustomerForLatLong(strsearch).subscribe(data => {
              var response = data;
              this.BusinessPartnerlist = response;
              
            });
          }
          else{
            if(this.leastBusinessPartnerlist || this.leastBusinessPartnerlist!=null) {
            if(this.leastBusinessPartnerlist.length>this.loginauth.minlistcount)
        {
          this.BusinessPartnerlist=null;
        }
        else{
         
          this.BusinessPartnerlist=this.leastBusinessPartnerlist;
        }}
        else{
         
          this.BusinessPartnerlist=this.leastBusinessPartnerlist;
        }
          }
    } catch (error) {
    //  console.log(this.TAG,methodTAG,error);	
      this.commonfun.presentAlert("Message","Error",error);
    }
  }

  checkcust(){
    try {
      
  
      this.locationfinderservice.getUserWiseCustomerForLatLong("").subscribe(data => {
        var response = data;
       
        this.leastBusinessPartnerlist = response;
if(this.leastBusinessPartnerlist)
{
        if(this.leastBusinessPartnerlist.length==1)
        {
          this.BusinessPartnerlist=this.leastBusinessPartnerlist;
          this.latLongForm.controls["selectedBusinessPartner"].setValue(this.BusinessPartnerlist[0]);
          //this.onCustDropDownChange(this.BusinessPartnerlist[0]);
          this.getCustomerAddress(this.BusinessPartnerlist[0]);
        }
        else if(this.leastBusinessPartnerlist.length>this.loginauth.minlistcount)
        {
          this.BusinessPartnerlist=null;
          this.latLongForm.controls["selectedBusinessPartner"].setValue(null);

        }
        else{
    
          this.BusinessPartnerlist=this.leastBusinessPartnerlist;
          this.latLongForm.controls["selectedBusinessPartner"].setValue(null);
        }
      }
      }); 
     
    } catch (error) {
    //  console.log("Error:chckcust",error);
    }
  }


  /**
  * @kind function
  * @description This method will get customer address from server.
  * @private
  * @param Id Customer Id
  * @returns void
  * @module Travel Expense 
  * @since 1.0.0.
  * @author Pravin Bhosale.
  */
  private getCustomerAddress(selectedBusinessPartner):void{
    let methodTAG = 'getCustomerAddress';
    try {
      
          let jsondata = selectedBusinessPartner.AddressList;
        
          if(jsondata.length>0)
          {
          this.BPaddressshipping = jsondata;
          this.selectedAddressDropDown = this.BPaddressshipping[0];
          this.showTxtAddress = true;
         // this.BPaddressshipping[0].name = null;
          if(!!this.BPaddressshipping[0].addressname){
            this.txtselectedAddress = this.BPaddressshipping[0].addressname;
            this.showBtnConvertAddressToLatLong = false;
            this.showBtnCaptureLatLong = true;
          } else {
            this.showBtnCaptureLatLong = false;
            this.txtselectedAddress =null
            this.showBtnConvertAddressToLatLong = false;
          }
        }
        else{
          this.showBtnCaptureLatLong = true;
          this.BPaddressshipping=null;
          this.selectedAddressDropDown =null;
          this.showTxtAddress = false;
          this.txtselectedAddress =null
          this.showBtnConvertAddressToLatLong = false;

        }
    
    } catch (error) {
   //   console.log("Error:getCustomerAddress:",error)
    }
  }
  /**
 * @kind function
 * @description This method will convert your lat-long into the street address.
 * @param lat 
 * @param lng
 * @returns void
 * @module  Travel Expense
 * @since 0.0.8
 * @author Pravin Bhosale.
 * @see https://ionicframework.com/docs/native/native-geocoder.
 */
  private reverseGeocode(lat, lng) {
    let methodTAG = 'reverseGeocode';
    try {
          if (this.platform.is('cordova')) {
            
            let options: NativeGeocoderOptions = {
            useLocale: true,
            maxResults: 1
            };
            this.nativeGeocoder.reverseGeocode(lat, lng, options)
            .then((result: any) => {
              
              // this.userLocation = result[0]
              // 
            })
            .catch((error: any) => console.log(error));
          } else {
            //For PWA App
          } 

    } catch (error) {
      console.log(this.TAG,methodTAG,error);	
      this.commonfun.presentAlert("Message","Error",error);
    }
  }
  /**
   * @kind function
   * @description This method is converting addresses (like a street address) into geographic coordinates (like latitude and longitude). 
   * @param address
   * @module  Travel Expense.
   * @since 0.0.8
   * @author Pravin Bhosale.
   * @see https://ionicframework.com/docs/native/native-geocoder.
   */
  private forwardGeocode(address) {
    let methodTAG = 'forwardGeocode';
    try {
    
      //    if (this.platform.is('cordova')) {
        if (this.msg.isplatformweb==false)
         {
            
            let options: NativeGeocoderOptions = {
              useLocale: true,
              maxResults: 5
            };
            
            
            this.nativeGeocoder.forwardGeocode(address, options)
              .then((result: NativeGeocoderResult[]) => {
                this.zone.run(() => {
                  
                  this.txtLatitude = result[0].latitude;
                  this.txtLongitude = result[0].longitude;
                  
                })
          })
          .catch((error: any) =>{ console.log("cATCXH",error)	
          this.commonfun.presentAlert("Message","Error",error);	
                
            });
          } else {
            //For PWA App.
          //  console.log("else");
          //  this.captureLatLong()
          }
    } catch (error) {
    //  console.log(this.TAG,methodTAG,error);	
      this.commonfun.presentAlert("Message","Error",error);	

    }
  }

  Resetpage(){
    try {
      this.latLongForm.reset();
      this.txtselectedAddress=null;
      this.txtLatitude=null;
      this.txtLongitude=null;
      this.showTxtAddress=false;
      this.showBtnConvertAddressToLatLong=false;
      this.showBtnCaptureLatLong=false;
      this.checkcust();
    } catch (error) {
    //  console.log("Error:Resetpage",error)
    }
  }


}
