import { Component } from '@angular/core';
import { LoginauthService } from './login/loginauth.service';
import { Constants } from './common/Constants';
import { PinCheck } from '@ionic-native/pin-check/ngx';
import { Storage } from '@ionic/storage';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Platform, MenuController, Events } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Message } from '../provider/message-helper'
import { Commonfun } from 'src/provider/commonfun';
import { Market } from '@ionic-native/market/ngx';
import { GenericHttpClientService } from './common/generic-http-client.service';
import { OrderApprovalServiceService } from './order-approval/order-approval-service.service';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  VERSION_NO;

  public isNewLead = false;
  public isExistingLead = false;
  public isBusinessPartnerAddress = false;
  public isNewOrder = false;
  public isDraftOrder = false;
  public isOrderStatus = false;

  public isLatLongFinder = false;
  public isTravelPlan = false;
  public isActualTravelPlan = false;
  public isTravelExpense = false;
  public isTravelPlanClosure = false;
  public isApprovalAccess = false;

  public isCustomerServiceAccess = false;
  public isComplaintReportingAccess = false;
  public isCompliantAcceptanceAccess = false;
  public isFieldVisitAccess = false;

  public isQuotationAccess = false;
  public isQuotationApproval = false;

  public isUpload = false;
  public isReport = false;
  public isarvisitschedule = false;
  public isConsolidationOrder = false;


  isexpenseaccess = false;
  public isschemeinfo = false;

  readonly TAG = "AppComponent";

  public appPages = [
    {
      title: 'New Lead', url: '/newcustomer', icon: 'person-add', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Existing Lead', url: '/existingcustomer', icon: 'person', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Business Partner Address', url: '/business-partner-address', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'New Order', url: '/neworder', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Draft Order', url: '/existingorder', icon: 'list-box', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Order Status', url: '/order-status', icon: 'stats', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },

    {
      title: 'Lat-Long Finder', url: '/location-finder', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Travel Plan', url: '/travel-plan', icon: 'pin', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Visit Activity Report', url: '/actual-travel-plan', icon: 'pin', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Travel Expense', url: '/travel-expense', icon: 'pin', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Expense Closure', url: '/travel-plan-closure', icon: 'pin', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Approval', url: '/order-approval', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Scheme Information', url: '/scheme-information', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Customer Service', url: '/customer-service', icon: 'megaphone', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Complaint Reporting', url: '/service-manager', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Compliant Acceptance', url: '/vender-approval', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Field Visit', url: '/service-engineer-visit', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Reports', url: '/profile', icon: 'bookmarks', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'AR Visit Schedule', url: '/arvisitschedule', icon: 'bookmarks', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Customer Quotation', url: '/customer-quotation', icon: 'wallet', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Quotation Approval', url: '/quotation-approval', icon: 'wallet', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Consolidation Order', url: '/consolidation-order', icon: 'keypad', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Upload', url: '/upload', icon: 'cloud-upload', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Settings', url: '/settings', icon: 'settings', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Logout', url: '/login', icon: 'log-out', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    }
  ];
  public vetappPages = [
    {
      title: 'My Transaction', url: '/use-vetcoins-transaction', icon: 'cash', approvalaccess: true, isschemeinfo: true,
      isQuotationAccess: true, isQuotationApproval: true
    },
    {
      title: 'Use VetCoins', url: '/use-vetcoins', icon: 'basketball', approvalaccess: true, isschemeinfo: true,
      isQuotationAccess: true, isQuotationApproval: true
    },
    {
      title: 'About', url: '/about', icon: 'chatbubbles', approvalaccess: true, isschemeinfo: true, isQuotationAccess: true,
      isQuotationApproval: true
    },
    {
      title: 'Logout', url: '/login', icon: 'log-out', approvalaccess: true, isschemeinfo: true, isQuotationAccess: true,
      isQuotationApproval: true
    }
  ];
  public checkcust = [
    {
      title: 'New Order', url: '/neworder', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Draft Order', url: '/existingorder', icon: 'list-box', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Order Status', url: '/order-status', icon: 'stats', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Lat-Long Finder', url: '/location-finder', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Travel Plan', url: '/travel-plan', icon: 'pin', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Visit Activity Report', url: '/actual-travel-plan', icon: 'pin', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Travel Expense', url: '/travel-expense', icon: 'pin', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Expense Closure', url: '/travel-plan-closure', icon: 'pin', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Approval', url: '/order-approval', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Scheme Information', url: '/scheme-information', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Customer Service', url: '/customer-service', icon: 'megaphone', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Complaint Reporting', url: '/service-manager', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Compliant Acceptance', url: '/vender-approval', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Field Visit', url: '/service-engineer-visit', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Reports', url: '/profile', icon: 'bookmarks', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Customer Quotation', url: '/customer-quotation', icon: 'wallet', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Quotation Approval', url: '/quotation-approval', icon: 'wallet', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Consolidation Order', url: '/consolidation-order', icon: 'keypad', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Upload', url: '/upload', icon: 'cloud-upload', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Settings', url: '/settings', icon: 'settings', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    },
    {
      title: 'Logout', url: '/login', icon: 'log-out', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
      isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
      isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
      isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
      isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true, isarvisitschedule: true
    }
  ];

  ishidemenu: boolean = true;
  iswebplatform: boolean = false;
  darkMode: boolean;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public loginauth: LoginauthService,
    private pinCheck: PinCheck,
    public storage: Storage,
    private router: Router,
    public menuctrl: MenuController,
    private fingerprint: FingerprintAIO,
    public msg: Message,
    public commonFunction: Commonfun,
    private market: Market,
    public events: Events,
    private zone: NgZone,
    private orderApprovalServiceService: OrderApprovalServiceService,
  ) {
    this.VERSION_NO = Constants.VERSION_NO;
    this.events.subscribe('updateMenu', () => {
      this.zone.run(() => {
        //console.log('events force update the screen');
        
        this.isNewLead = this.loginauth.isNewLead;
        this.isExistingLead = this.loginauth.isExistingLead;
        this.isBusinessPartnerAddress = this.loginauth.isBusinessPartnerAddress;
        this.isNewOrder = this.loginauth.isNewOrder;
        this.isDraftOrder = this.loginauth.isDraftOrder;
        this.isOrderStatus = this.loginauth.isOrderStatus;

        this.isLatLongFinder = this.loginauth.isLatLongFinder;
        this.isTravelPlan = this.loginauth.isTravelPlan;
        this.isActualTravelPlan = this.loginauth.isActualTravelPlan;
        this.isTravelExpense = this.loginauth.isTravelExpense;
        this.isTravelPlanClosure = this.loginauth.isTravelPlanClosure;
        this.isApprovalAccess = this.loginauth.isApprovalAccess;



        this.isschemeinfo = this.loginauth.isschemeinfo;

        this.isCustomerServiceAccess = this.loginauth.isCustomerServiceAccess;
        this.isCompliantAcceptanceAccess = this.loginauth.isCompliantAcceptanceAccess;
        this.isComplaintReportingAccess = this.loginauth.isComplaintReportingAccess;
        this.isFieldVisitAccess = this.loginauth.isFieldVisitAccess;
        this.isQuotationAccess = this.loginauth.isQuotationAccess;
        this.isQuotationApproval = this.loginauth.isQuotationApproval;
        this.isConsolidationOrder = this.loginauth.isConsolidationOrder;
        this.isUpload = this.loginauth.isUpload;
        this.isReport = this.loginauth.isReport;
       
        this.isarvisitschedule=this.loginauth.isARVisitSchedule;
        this.Updatemenu();
      });
    });
    this.router.events.subscribe((e) => {
     // console.log('force update the screen');
      // this.isexpenseaccess = this.loginauth.isexpenseaccess;
      // this.isApprovalAccess = this.loginauth.approvalScreen;

      this.isNewLead = this.loginauth.isNewLead;
      this.isExistingLead = this.loginauth.isExistingLead;
      this.isBusinessPartnerAddress = this.loginauth.isBusinessPartnerAddress;
      this.isNewOrder = this.loginauth.isNewOrder;
      this.isDraftOrder = this.loginauth.isDraftOrder;
      this.isOrderStatus = this.loginauth.isOrderStatus;

      this.isLatLongFinder = this.loginauth.isLatLongFinder;
      this.isTravelPlan = this.loginauth.isTravelPlan;
      this.isActualTravelPlan = this.loginauth.isActualTravelPlan;
      this.isTravelExpense = this.loginauth.isTravelExpense;
      this.isTravelPlanClosure = this.loginauth.isTravelPlanClosure;
      this.isApprovalAccess = this.loginauth.isApprovalAccess;

      this.isschemeinfo = this.loginauth.isschemeinfo;
      this.isCustomerServiceAccess = this.loginauth.isCustomerServiceAccess;
      this.isCompliantAcceptanceAccess = this.loginauth.isCompliantAcceptanceAccess;
      this.isComplaintReportingAccess = this.loginauth.isComplaintReportingAccess;
      this.isFieldVisitAccess = this.loginauth.isFieldVisitAccess;

      this.isQuotationAccess = this.loginauth.isQuotationAccess;
      this.isQuotationApproval = this.loginauth.isQuotationApproval;
      this.isUpload = this.loginauth.isUpload;
      this.isReport = this.loginauth.isReport;
      this.isarvisitschedule= this.loginauth.isARVisitSchedule;
      this.Updatemenu();
      if (this.router.url != "/order-approval" && this.router.url != "/filter") {
        this.orderApprovalServiceService.filterTab = [];
        this.orderApprovalServiceService.filterOrg = [];
        this.orderApprovalServiceService.filterDocType = [];
        this.orderApprovalServiceService.filterBusinessPartner = 'CLEAR';
        this.orderApprovalServiceService.filterselectedBusinessPartner = '';
        this.orderApprovalServiceService.pageOffset = 0;
      }
      if (this.router.url == "/login" || this.router.url == "/login-option" || this.router.url == "/terms-of-agreement") {
        this.ishidemenu = true;
        this.menuctrl.enable(false);
      }
      else {
        this.ishidemenu = false;
        this.menuctrl.enable(true)
      }
    });
    this.initializeApp();
    if (!this.msg.isplatformweb) {

      this.iswebplatform = false;
    }
    else {
      this.iswebplatform = true;
    }
    this.storage.get('darkMode').then((darkMode) => {
      if (darkMode) {
        this.darkMode = darkMode;
      } else {
        this.storage.set('darkMode', false);
        this.darkMode = false;
      }
    });
  }
 
  themeMode() {
    this.storage.set('darkMode', (!this.darkMode));
    this.darkMode != this.darkMode;
    document.body.classList.toggle('dark');
  }
  // chkdata() {
  //   if (!this.loginauth.defaultprofile) {
  //     this.storage.get('loginauth').then((loginauth) => {
  //       if (loginauth) {
  //         this.loginauth = loginauth;
  //         this.router.navigateByUrl('/home');
  //       }
  //       else {
  //         this.router.navigateByUrl('/login');
  //       }
  //     });
  //   }
  //   else {
  //     this.storage.set('loginauth', this.loginauth);
  //   }
  // }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.isVisible = true;
      this.statusBar.styleDefault();
      this.storage.set('changePasswordFromSettingPage', false);
      this.splashScreen.hide();
      this.fingerprint.isAvailable()
        .then((isAvailableResult: any) => {
          this.storage.set('Biometric_Type', isAvailableResult);
          this.storage.set('Biometric_Device_Codes', '200');
        })
        .catch((fingerprintError: any) => {
          this.storage.set('Biometric_Device_Codes', fingerprintError.code);
          this.storage.set('Biometric_Device_Codes', fingerprintError.code);
        });

      this.pinCheck.isPinSetup().then((pinSuccess) => {
        this.storage.set('PIN_Status', "200");
      }).catch((pinError) => {
        this.storage.set('PIN_Status', "400");
      })
    });
  }
  Updatemenu() {
    try {
    //  console.log("TAG","Updatemenu");
      this.appPages = [
        {
          title: 'New Lead', url: '/newcustomer', icon: 'person-add', isNewLead: this.isNewLead, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Existing Lead', url: '/existingcustomer', icon: 'person', isNewLead: true, isExistingLead: this.isExistingLead, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Business Partner Address', url: '/business-partner-address', icon: 'clipboard',
          isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: this.isBusinessPartnerAddress,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'New Order', url: '/neworder', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: this.isNewOrder, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Draft Order', url: '/existingorder', icon: 'list-box', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: this.isDraftOrder, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Order Status', url: '/order-status', icon: 'stats', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: this.isOrderStatus, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Lat-Long Finder', url: '/location-finder', icon: 'clipboard',
          isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: this.isLatLongFinder, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Travel Plan', url: '/travel-plan', icon: 'pin', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: this.isTravelPlan, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Visit Activity Report', url: '/actual-travel-plan', icon: 'pin',
          isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: this.isActualTravelPlan,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Travel Expense', url: '/travel-expense', icon: 'pin', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: this.isTravelExpense, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Expense Closure', url: '/travel-plan-closure', icon: 'pin',
          isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: this.isTravelPlanClosure, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Approval', url: '/order-approval', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: this.isApprovalAccess, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Scheme Information', url: '/scheme-information', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: this.isschemeinfo, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Customer Service', url: '/customer-service', icon: 'megaphone', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: this.isCustomerServiceAccess,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Complaint Reporting', url: '/service-manager', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: this.isComplaintReportingAccess, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Compliant Acceptance', url: '/vender-approval', icon: 'clipboard',
          isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: this.isCompliantAcceptanceAccess, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Field Visit', url: '/service-engineer-visit', icon: 'bicycle', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: this.isFieldVisitAccess,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Reports', url: '/profile', icon: 'bookmarks', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: this.isReport,isarvisitschedule: true
        },
        {
          title: 'AR Visit Schedule', url: '/arvisitschedule', icon: 'bookmarks', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,isarvisitschedule: this.isarvisitschedule
        },
        {
          title: 'Customer Quotation', url: '/customer-quotation', icon: 'wallet', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: this.isQuotationAccess, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Quotation Approval', url: '/quotation-approval', icon: 'wallet', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: this.isQuotationApproval, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Consolidation Order', url: '/consolidation-order', icon: 'keypad', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: this.isConsolidationOrder, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Upload', url: '/upload', icon: 'cloud-upload', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: this.isUpload, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Settings', url: '/settings', icon: 'settings', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Logout', url: '/login', icon: 'log-out', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        }
      ];
      this.vetappPages = [
        {
          title: 'My Transaction', url: '/use-vetcoins-transaction', icon: 'cash', approvalaccess: true, isschemeinfo: true,
          isQuotationAccess: true, isQuotationApproval: true
        },
        {
          title: 'Use VetCoins', url: '/use-vetcoins', icon: 'basketball', approvalaccess: true, isschemeinfo: true,
          isQuotationAccess: true, isQuotationApproval: true
        },
        {
          title: 'About', url: '/about', icon: 'chatbubbles', approvalaccess: true, isschemeinfo: true, isQuotationAccess: true,
          isQuotationApproval: true
        },
        {
          title: 'Logout', url: '/login', icon: 'log-out', approvalaccess: true, isschemeinfo: true, isQuotationAccess: true,
          isQuotationApproval: true
        }
      ];
      this.checkcust = [
        {
          title: 'New Order', url: '/neworder', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: this.isNewOrder, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Draft Order', url: '/existingorder', icon: 'list-box', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: this.isDraftOrder, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Order Status', url: '/order-status', icon: 'stats', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: this.isOrderStatus, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Lat-Long Finder', url: '/location-finder', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: this.isLatLongFinder, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Travel Plan', url: '/travel-plan', icon: 'pin', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: this.isTravelPlan, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Visit Activity Report', url: '/actual-travel-plan', icon: 'pin', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: this.isActualTravelPlan,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Travel Expense', url: '/travel-expense', icon: 'pin', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: this.isTravelExpense, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Expense Closure', url: '/travel-plan-closure', icon: 'pin', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: this.isTravelPlanClosure, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Approval', url: '/order-approval', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: this.isApprovalAccess, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Scheme Information', url: '/scheme-information', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: this.isschemeinfo, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Customer Service', url: '/customer-service', icon: 'megaphone', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: this.isCustomerServiceAccess,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Complaint Reporting', url: '/service-manager', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: this.isComplaintReportingAccess, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Compliant Acceptance', url: '/vender-approval', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: this.isCompliantAcceptanceAccess, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Field Visit', url: '/service-engineer-visit', icon: 'clipboard', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: this.isFieldVisitAccess,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Reports', url: '/profile', icon: 'bookmarks', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: this.isReport,  isarvisitschedule: true
        },
        {
          title: 'AR Visit Schedule', url: '/arvisitschedule', icon: 'bookmarks', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,isarvisitschedule: this.isarvisitschedule
        },
        {
          title: 'Customer Quotation', url: '/customer-quotation', icon: 'wallet', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: this.isQuotationAccess, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Quotation Approval', url: '/quotation-approval', icon: 'wallet', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: this.isQuotationApproval, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Consolidation Order', url: '/consolidation-order', icon: 'keypad', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: this.isConsolidationOrder, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Upload', url: '/upload', icon: 'cloud-upload', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: this.isUpload, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Settings', url: '/settings', icon: 'settings', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        },
        {
          title: 'Logout', url: '/login', icon: 'log-out', isNewLead: true, isExistingLead: true, isBusinessPartnerAddress: true,
          isNewOrder: true, isDraftOrder: true, isOrderStatus: true, isLatLongFinder: true, isTravelPlan: true, isActualTravelPlan: true,
          isTravelExpense: true, isTravelPlanClosure: true, isApprovalAccess: true, isschemeinfo: true, isCustomerServiceAccess: true,
          isComplaintReportingAccess: true, isCompliantAcceptanceAccess: true, isFieldVisitAccess: true,
          isQuotationAccess: true, isQuotationApproval: true, isConsolidationOrder: true, isUpload: true, isReport: true,  isarvisitschedule: true
        }
      ];
    } catch (error) {
      //  console.log("ERROE Uodatemenu: ", error);
    }
  }


}