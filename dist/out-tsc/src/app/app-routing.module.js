import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
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
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map