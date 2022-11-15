import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
//  { path: '', redirectTo: 'order-approval', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'bom', loadChildren: './bom/bom.module#BomPageModule' },
  { path: 'readertest', loadChildren: './readertest/readertest.module#ReadertestPageModule' },
  { path: 'joblist', loadChildren: './joblist/joblist.module#JoblistPageModule' },
  { path: 'job/:jobid', loadChildren: './job/job.module#JobPageModule' },
  { path: 'jobdetails/:jobid', loadChildren: './jobdetails/jobdetails.module#JobdetailsPageModule' },
  { path: 'jobtransfer/:jobid', loadChildren: './jobtransfer/jobtransfer.module#JobtransferPageModule' },
  { path: 'options', loadChildren: './options/options.module#OptionsPageModule' },
  { path: 'newcustomer', loadChildren: './newcustomer/newcustomer.module#NewcustomerPageModule' },
  { path: 'productsearch', loadChildren: './productsearch/productsearch.module#ProductsearchPageModule' },
  { path: 'existingcustomer', loadChildren: './existingcustomer/existingcustomer.module#ExistingcustomerPageModule' },
  { path: 'neworder', loadChildren: './neworder/neworder.module#NeworderPageModule' },
  { path: 'addeditproduct', loadChildren: './addeditproduct/addeditproduct.module#AddeditproductPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'existingorder', loadChildren: './existingorder/existingorder.module#ExistingorderPageModule' },
  { path: 'business-partner-address', loadChildren: './business-partner-address/business-partner-address.module#BusinessPartnerAddressPageModule' },
  { path: 'addedit-business-partner-address', loadChildren: './addedit-business-partner-address/addedit-business-partner-address.module#AddeditBusinessPartnerAddressPageModule' },
  { path: 'login-option', loadChildren: './login-option/login-option.module#LoginOptionPageModule' },
  { path: 'use-vetcoins', loadChildren: './use-vetcoins/use-vetcoins.module#UseVetcoinsPageModule' },
  { path: 'use-vetcoins-balance', loadChildren: './use-vetcoins-balance/use-vetcoins-balance.module#UseVetcoinsBalancePageModule' },
  { path: 'use-vetcoins-redemption', loadChildren: './use-vetcoins-redemption/use-vetcoins-redemption.module#UseVetcoinsRedemptionPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'use-vetcoins-transaction', loadChildren: './use-vetcoins-transaction/use-vetcoins-transaction.module#UseVetcoinsTransactionPageModule' },
  { path: 'order-status', loadChildren: './order-status/order-status.module#OrderStatusPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  // { path: 'settings', loadChildren: './hrms/mpr-list/mpr-list.module#MprListPageModule' },
  { path: 'location-finder', loadChildren: './location-finder/location-finder.module#LocationFinderPageModule' },
  { path: 'travel-expense', loadChildren: './travel-expense/travel-expense.module#TravelExpensePageModule' },
  { path: 'travel-plan-closure', loadChildren: './travel-plan-closure/travel-plan-closure.module#TravelPlanClosurePageModule' },
  { path: 'travel-plan', loadChildren: './travel-plan/travel-plan.module#TravelPlanPageModule' },
  { path: 'addedit-travel-plan', loadChildren: './addedit-travel-plan/addedit-travel-plan.module#AddeditTravelPlanPageModule' },
  { path: 'lat-long-finder', loadChildren: './lat-long-finder/lat-long-finder.module#LatLongFinderPageModule' },
  { path: 'actual-travel-plan', loadChildren: './actual-travel-plan/actual-travel-plan.module#ActualTravelPlanPageModule' },
  { path: 'addedit-actual-travel-plan', loadChildren: './addedit-actual-travel-plan/addedit-actual-travel-plan.module#AddeditActualTravelPlanPageModule' },
  { path: 'terms-of-agreement', loadChildren: './terms-of-agreement/terms-of-agreement.module#TermsOfAgreementPageModule' },
  { path: 'addedit-travel-expense', loadChildren: './addedit-travel-expense/addedit-travel-expense.module#AddeditTravelExpensePageModule' },
  { path: 'order-approval', loadChildren: './order-approval/order-approval.module#OrderApprovalPageModule' },
  { path: 'filter', loadChildren: './filter/filter.module#FilterPageModule' },
  { path: 'sort', loadChildren: './sort/sort.module#SortPageModule' },
  { path: 'show-approval-details-modal', loadChildren: './order-approval/show-approval-details-modal/show-approval-details-modal.module#ShowApprovalDetailsModalPageModule' },
  { path: 'scheme-information', loadChildren: './scheme-information/scheme-information.module#SchemeInformationPageModule' },
  { path: 'customer-service', loadChildren: './cardinal/customer-service/customer-service.module#CustomerServicePageModule' },
  { path: 'service-manager', loadChildren: './cardinal/service-manager/service-manager.module#ServiceManagerPageModule' },
  { path: 'vender-approval', loadChildren: './cardinal/vender-approval/vender-approval.module#VenderApprovalPageModule' },
  { path: 'service-engineer-visit', loadChildren: './cardinal/service-engineer-visit/service-engineer-visit.module#ServiceEngineerVisitPageModule' },
  { path: 'service-manager-details', loadChildren: './cardinal/service-manager/service-manager-details/service-manager-details.module#ServiceManagerDetailsPageModule' },
  { path: 'vender-approval-details', loadChildren: './cardinal/vender-approval/vender-approval-details/vender-approval-details.module#VenderApprovalDetailsPageModule' },
  { path: 'service-engineer-visit-detail', loadChildren: './cardinal/service-engineer-visit/service-engineer-visit-detail/service-engineer-visit-detail.module#ServiceEngineerVisitDetailPageModule' },

  { path: 'report/:rptid', loadChildren: './report/report.module#ReportPageModule' },
  {
    path: 'reportcategory',
    loadChildren: () => import('./reportcategory/reportcategory.module').then( m => m.ReportcategoryPageModule)
  },
  { path: 'selectorsingle/:rptid/:scontrolname/:controltype', loadChildren: './selectorsingle/selectorsingle.module#SelectorsinglePageModule' },
  { path: 'customer-quotation', loadChildren: './quotation/customer-quotation/customer-quotation.module#CustomerQuotationPageModule' },
  { path: 'add-edit-service-product', loadChildren: './quotation/add-edit-service-product/add-edit-service-product.module#AddEditServiceProductPageModule' },
  { path: 'quotation-approval', loadChildren: './quotation/quotation-approval/quotation-approval.module#QuotationApprovalPageModule' },
  { path: 'consolidation-order', loadChildren: './consolidation-order/consolidation-order.module#ConsolidationOrderPageModule' },
  { path: 'upload', loadChildren: './upload/upload/upload.module#UploadPageModule' },
  { path: 'product-filter', loadChildren: './product-filter/product-filter.module#ProductFilterPageModule' },
  { path: 'product-list', loadChildren: './product-list/product-list.module#ProductListPageModule' },
   { path: 'custom-alert', loadChildren: './custom-alert/custom-alert.module#CustomAlertPageModule' },
  { path: 'page-name', loadChildren: './modals/page-name/page-name.module#PageNamePageModule' },
  { path: 'mpr-form', loadChildren: './hrms/mpr-form/mpr-form.module#MprFormPageModule' },
  { path: 'mpr-list', loadChildren: './hrms/mpr-list/mpr-list.module#MprListPageModule' },
  { path: 'arvisitschedule', loadChildren: './arvisitschedule/arvisitschedule.module#ArvisitschedulePageModule' },
  { path: 'section', loadChildren: './arvisitschedule/section/section.module#SectionPageModule'  },
  { path: 'sectionview',loadChildren: './arvisitschedule/sectionview/sectionview.module#SectionviewPageModule'  },
  { path: 'selectorsinglequestionframwork',loadChildren: './selectorsinglequestionframwork/selectorsingle.module#SelectorsinglePageModule'},
  { path: 'multipleentry',loadChildren: './multipleentry/multipleentry.module#MultipleentryPageModule'  },
  { path: 'aruserselect', loadChildren: './arvisitschedule/aruserselect/aruserselect.module#AruserselectPageModule' },
  { path: 'unplannedvisit', loadChildren: './arvisitschedule/unplannedvisit/unplannedvisit.module#UnplannedvisitPageModule' },

];

@NgModule({
  imports: [
   //  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
     RouterModule.forRoot(routes, { useHash:true }),




  ],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }
