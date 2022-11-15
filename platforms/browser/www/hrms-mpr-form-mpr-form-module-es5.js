(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hrms-mpr-form-mpr-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/hrms/mpr-form/mpr-form.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hrms/mpr-form/mpr-form.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button *ngIf=\"!existingMPRStatus\"></ion-menu-button>\n      <ion-back-button *ngIf=\"existingMPRStatus\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      MPR Form\n    </ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons (click)=\"refreshPage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"MPRForm\">\n    <ion-grid>\n      <ion-card>\n        <!-- Organization -->\n        \n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"3\">\n            <ion-item>\n              <ion-label position=\"stacked\">Organization<span style=\"color:red!important\">*</span></ion-label>\n                <ion-select placeholder=\"Select Organization\" [formControl]=\"MPRForm.controls['organizationDropDown']\" \n                  interface=\"popover\" [(ngModel)]=\"selectedOrganization\" (ionChange)=\"onOrganizationChange()\">\n                  <ion-select-option *ngFor=\"let organization of organizationList\" [value]=\"organization\">{{organization.name}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <div padding-left class=\"custom-error\">\n              <ng-container *ngFor=\"let validation of validation_messages.organizationDropDownErrorMessage\">\n                <div *ngIf=\"MPRForm.get('organizationDropDown').hasError(validation.type) && MPRForm.get('organizationDropDown').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n        <!-- Activity -->\n          <ion-col size=\"12\" size-lg=\"3\">\n            <ion-item>\n              <ion-label position=\"stacked\">Activity</ion-label>\n              <ion-input [value]=\"activityLbl\" disabled=\"true\"></ion-input>\n            </ion-item>\n          </ion-col>\n        <!-- Tagged HR Branch -->\n          <ion-col size=\"12\" size-lg=\"3\">\n            <ion-item>\n              <ion-label position=\"stacked\">Tagged HR Branch</ion-label>\n              <ion-input [value]=\"taggedHRBranchLbl\" disabled=\"true\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <!-- Document Status -->\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"3\">\n            <ion-item>\n              <ion-label position=\"stacked\">Reason for MPR<span style=\"color:red!important\">*</span></ion-label>\n                <ion-select placeholder=\"Select Reason for MPR\" [formControl]=\"MPRForm.controls['reasonForMPRDropDown']\" interface=\"popover\"\n                  (ionChange)=\"onReasonForMPRChange()\">\n                  <ion-select-option *ngFor=\"let reason of reasonForMPRList\" [value]=\"reason\">{{reason.name}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <div padding-left class=\"custom-error\">\n              <ng-container *ngFor=\"let validation of validation_messages.reasonForMPRDropDownErrorMessage\">\n                <div *ngIf=\"MPRForm.get('reasonForMPRDropDown').hasError(validation.type) && MPRForm.get('reasonForMPRDropDown').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n          <!-- Reason for MPR -->\n          <ion-col size=\"12\" size-lg=\"3\">\n            <ion-item>\n              <ion-label position=\"stacked\">JOB Title<span style=\"color:red!important\">*</span></ion-label>\n                  <ion-select placeholder=\"Select JOB Title\" [formControl]=\"MPRForm.controls['jobTitleDropDown']\" interface=\"popover\"\n                    (ionChange)=\"onJobTitleChange()\" [(ngModel)]=\"selectedJOBTitle\">\n                    <ion-select-option *ngFor=\"let  jobTitle of jobTitleList\" [value]=\"jobTitle\">{{jobTitle.JobTitle}}</ion-select-option>\n                  </ion-select>\n            </ion-item>\n            <div padding-left class=\"custom-error\">\n              <ng-container *ngFor=\"let validation of validation_messages.jobTitleDropDownErrorMessage\">\n                <div *ngIf=\"MPRForm.get('jobTitleDropDown').hasError(validation.type) && MPRForm.get('jobTitleDropDown').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n          <!-- JOB Title -->\n          <ion-col size=\"12\" size-lg=\"3\">\n            <ion-item>\n              <ion-label position=\"stacked\">Grade<span style=\"color:red!important\">*</span></ion-label>\n                <ion-select placeholder=\"Select Grade\" [formControl]=\"MPRForm.controls['gradeDropDown']\" interface=\"popover\"\n                  (ionChange)=\"onGradeChange()\" [(ngModel)]=\"selectedGrade\">\n                  <ion-select-option *ngFor=\"let grade of gradeList\" [value]=\"grade\">{{grade.gradename}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <div padding-left class=\"custom-error\">\n              <ng-container *ngFor=\"let validation of validation_messages.gradeDropDownErrorMessage\">\n                <div *ngIf=\"MPRForm.get('gradeDropDown').hasError(validation.type) && MPRForm.get('gradeDropDown').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n        </ion-row>\n        <!-- Grade -->\n        \n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"3\">\n            <ion-item>\n              <ion-label position=\"stacked\">Designation / Role<span style=\"color:red!important\">*</span></ion-label>\n                  <ion-select placeholder=\"Select Designation / Role\" [formControl]=\"MPRForm.controls['designationOrRoleDropDown']\" interface=\"popover\"\n                    (ionChange)=\"onDesignationOrRoleChange()\" [(ngModel)]=\"selectedDesignation\">\n                    <ion-select-option *ngFor=\"let designationOrRole of designationOrRoleList\" [value]=\"designationOrRole\">{{designationOrRole.rolename}}</ion-select-option>\n                  </ion-select>\n            </ion-item>\n            <div padding-left class=\"custom-error\">\n              <ng-container *ngFor=\"let validation of validation_messages.designationOrRoleDropDownErrorMessage\">\n                <div\n                  *ngIf=\"MPRForm.get('designationOrRoleDropDown').hasError(validation.type) && MPRForm.get('designationOrRoleDropDown').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n          <!-- Designation / Role -->\n          <ion-col size=\"12\" size-lg=\"3\">\n            <ion-item>\n              <ion-label position=\"stacked\">Department<span style=\"color:red!important\">*</span></ion-label>\n                  <ion-select placeholder=\"Select Department\" [formControl]=\"MPRForm.controls['departmentDropDown']\" interface=\"popover\"\n                    (ionChange)=\"onDepartmentChange()\" [(ngModel)]=\"selectedDepartment\">\n                    <ion-select-option *ngFor=\"let department of departmentList\" [value]=\"department\">{{department.departmentname}}</ion-select-option>\n                  </ion-select>\n            </ion-item>\n            <div padding-left class=\"custom-error\">\n              <ng-container *ngFor=\"let validation of validation_messages.departmentDropDownErrorMessage\">\n                <div *ngIf=\"MPRForm.get('departmentDropDown').hasError(validation.type) && MPRForm.get('departmentDropDown').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n          <!-- Department -->\n          <ion-col size=\"12\" size-lg=\"3\">\n            <ion-item>\n              <ion-label position=\"stacked\">Location<span style=\"color:red!important\">*</span></ion-label>\n                <ion-select id=\"demo\" class=\"ion-text-wrap select-text demo\" placeholder=\"Select Location\" [formControl]=\"MPRForm.controls['locationDropDown']\" interface=\"popover\"\n                  (ionChange)=\"onLocationChange()\" [(ngModel)]=\"selectedLocation\">\n                  <ion-select-option *ngFor=\"let location of locationList\" [value]=\"location\">{{location.locationname}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <div padding-left class=\"custom-error\">\n              <ng-container *ngFor=\"let validation of validation_messages.locationDropDownErrorMessage\">\n                <div *ngIf=\"MPRForm.get('locationDropDown').hasError(validation.type) && MPRForm.get('locationDropDown').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"3\">\n            <ion-item>\n              <ion-label position=\"stacked\" class=\"asterisk_input\">Number of Position</ion-label>\n              <ion-input type=\"text\" [formControl]=\"MPRForm.controls['numberOfPositionTxt']\"></ion-input>\n            </ion-item>\n            <div padding-left class=\"custom-error\">\n              <ng-container *ngFor=\"let validation of validation_messages.numberOfPositionTxtErrorMessage\">\n                <div *ngIf=\"MPRForm.get('numberOfPositionTxt').hasError(validation.type) && MPRForm.get('numberOfPositionTxt').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"3\">\n            <ion-item>\n              <ion-label position=\"stacked\">Position Closed</ion-label>\n              <ion-input type=\"text\" [formControl]=\"MPRForm.controls['positionClosedTxt']\" disabled=\"true\"></ion-input>\n            </ion-item>\n            <div padding-left class=\"custom-error\">\n              <ng-container *ngFor=\"let validation of validation_messages.positionClosedTxtErrorMessage\">\n                <div *ngIf=\"MPRForm.get('positionClosedTxt').hasError(validation.type) && MPRForm.get('positionClosedTxt').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"3\">\n            <ion-label class=\"asterisk_input item-custom-label\">Work Experience</ion-label>\n            <ion-item>\n              <ion-range min=\"0\" max=\"50\" dual-knobs=\"true\" class=\"custom-range\"  (ionChange)=\"onWorkExperienceChange(workExperienceModel)\" [(ngModel)]=\"workExperienceModel\"  [ngModelOptions]=\"{standalone: true}\" pin=\"true\">\n              <ion-label slot=\"start\">{{workExperienceModel_lower}}</ion-label>\n              <ion-label slot=\"end\">{{workExperienceModel_upper}}</ion-label>\n            </ion-range>\n          </ion-item>\n          </ion-col>  \n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"3\">\n            <ion-label class=\"asterisk_input item-custom-label\">CTC Range (Per Annum)</ion-label>\n            <ion-item>\n                <ion-range min=\"0\" max=\"100\" dual-knobs=\"true\" class=\"custom-range\" (ionChange)=\"onCTCRangeChange(CTCRangeModel)\" [(ngModel)]=\"CTCRangeModel\"  [ngModelOptions]=\"{standalone: true}\" pin=\"true\">\n                <ion-label slot=\"start\">{{CTCRangeModel_lower}}</ion-label>\n                <ion-label slot=\"end\">{{CTCRangeModel_upper}}{{maxCTCLbl}}</ion-label>\n              </ion-range>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"3\">\n            <ion-label class=\"asterisk_input item-custom-label\">Age Range</ion-label>\n            <ion-item>\n                <ion-range min=\"0\" max=\"100\" dual-knobs=\"true\" class=\"custom-range\" (ionChange)=\"onAgeRangeChange(AgeRangeModel)\" [(ngModel)]=\"AgeRangeModel\"  [ngModelOptions]=\"{standalone: true}\" pin=\"true\">\n                <ion-label slot=\"start\">{{AgeRangeModel_lower}}</ion-label>\n                <ion-label slot=\"end\">{{AgeRangeModel_upper}}</ion-label>\n              </ion-range>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"3\">\n            <ion-item>\n              <ion-label position=\"stacked\">Job Listing<span style=\"color:red!important\">*</span></ion-label>\n                  <ion-select placeholder=\"Select Job Listing\" [formControl]=\"MPRForm.controls['jobListingDropDown']\" interface=\"popover\"\n                    (ionChange)=\"onLocationChange()\" [(ngModel)]=\"selectedJobListing\">\n                    <ion-select-option *ngFor=\"let jobListing of jobListingList\" [value]=\"jobListing\">{{jobListing.name}}</ion-select-option>\n                  </ion-select>\n            </ion-item>\n            <div padding-left class=\"custom-error\">\n              <ng-container *ngFor=\"let validation of validation_messages.jobListingDropDownErrorMessage\">\n                <div *ngIf=\"MPRForm.get('jobListingDropDown').hasError(validation.type) && MPRForm.get('jobListingDropDown').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>On Company Roll</ion-label>\n              <ion-toggle slot=\"end\" [formControl]=\"MPRForm.controls['onCompanyRollChk']\"></ion-toggle>\n           </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n      \n      <ion-card>\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-item>\n              <ion-label position=\"stacked\">Qualification<span style=\"color:red!important\">*</span></ion-label>\n                <ion-select placeholder=\"Select Qualification\" [formControl]=\"MPRForm.controls['qualificationDropDown']\" interface=\"popover\"\n                  (ionChange)=\"onQualificationChange()\" [(ngModel)]=\"selectedQualification\">\n                  <ion-select-option *ngFor=\"let qualification of qualificationList\" [value]=\"qualification\">{{qualification.name}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <div padding-left class=\"custom-error\">\n              <ng-container *ngFor=\"let validation of validation_messages.qualificationDropDownErrorMessage\">\n                <div *ngIf=\"MPRForm.get('qualificationDropDown').hasError(validation.type) && MPRForm.get('qualificationDropDown').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n          <ion-col size=\"3\" class=\"add-qualification_btn\">\n            <button mat-raised-button color=\"add-button-color\" (click)=\"onAddQualification()\" class=\"add-button-color\" [disabled]=\"MPRForm.controls['qualificationDropDown'].hasError('required')\">Add</button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-card>\n              <ion-list>\n                <ion-item lines=\"none\" style=\"--background:darkgray !important;max-width: 100% !important;\">\n                  <ion-label>Qualification</ion-label>\n                </ion-item>  \n                <ion-item lines=\"none\" [color]=\"even? 'drak-gray' : 'white'\" *ngFor=\"let selectedQualification of selectedQualificationList;let even = even\" \n                          style=\"max-width: 100% !important;\">\n                  <ion-label>{{selectedQualification.name}}</ion-label>\n                  <button mat-icon-button (click)=\"removeSelectedQualification(selectedQualification)\">\n                    <mat-icon>delete</mat-icon>\n                  </button>\n                </ion-item>\n              </ion-list>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n      \n      <ion-card>\n        <ion-row>\n          <ion-col>\n            <ion-item style=\"max-width: 100% !important;\">\n              <ion-label position=\"stacked\" class=\"asterisk_input\">Job Description</ion-label>\n              <ion-textarea type=\"text\" auto-grow=\"true\" [formControl]=\"MPRForm.controls['jobDescriptionTxt']\"></ion-textarea>\n            </ion-item>\n            <div padding-left class=\"custom-error\">\n              <ng-container *ngFor=\"let validation of validation_messages.jobDescriptionTxtErrorMessage\">\n                <div *ngIf=\"MPRForm.get('jobDescriptionTxt').hasError(validation.type) && MPRForm.get('jobDescriptionTxt').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"add-resource-btn\">\n            <button mat-raised-button color=\"add-button-color\" (click)=\"onSaveJD()\" class=\"add-button-color\" [disabled]=\"disable_save_jd_btn\">Save</button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-card>\n              <ion-list>\n                <ion-item lines=\"none\" style=\"--background:darkgray !important;max-width: 100% !important;\">\n                  <ion-label>Job Descriptions</ion-label>\n                </ion-item>  \n                <ion-item lines=\"none\" [color]=\"even? 'drak-gray' : 'white'\" *ngFor=\"let jobDescription of jobDescriptionList;let even = even\" \n                          style=\"max-width: 100% !important;\">\n                  <ion-label>{{jobDescription.job_description}}</ion-label>\n                  <button mat-icon-button (click)=\"editSelectedJobDescription(jobDescription)\">\n                    <mat-icon>edit</mat-icon>\n                  </button>\n                </ion-item>\n              </ion-list>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n      \n      <ion-card>\n        <ion-row>\n          <!-- Resource Requirement * -->\n          <ion-col size=\"12\" size-lg=\"3\">\n            <ion-item>\n              <ion-label position=\"stacked\">Resource Requirement<span style=\"color:red!important\">*</span></ion-label>\n                <ion-select placeholder=\"Select Resource Requirement\" [formControl]=\"MPRForm.controls['resourceRequirementDropDown']\" interface=\"popover\"\n                  (ionChange)=\"onLocationChange()\">\n                  <ion-select-option *ngFor=\"let resourceRequirement of resourceRequirementMasterList\" [value]=\"resourceRequirement\">{{resourceRequirement.name}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <div padding-left class=\"custom-error\">\n              <ng-container *ngFor=\"let validation of validation_messages.resourceRequirementDropDownErrorMessage\">\n                <div *ngIf=\"MPRForm.get('resourceRequirementDropDown').hasError(validation.type) && MPRForm.get('resourceRequirementDropDown').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n          <!-- Resource Department  -->\n          <ion-col size=\"12\" size-lg=\"3\">\n            <ion-item>\n              <ion-label position=\"stacked\">Department<span style=\"color:red!important\">*</span></ion-label>\n                <ion-select placeholder=\"Select Department\" [formControl]=\"MPRForm.controls['resourceDepartmentDropDown']\" interface=\"popover\"\n                  (ionChange)=\"onLocationChange()\">\n                  <ion-select-option *ngFor=\"let resourceDepartment of resourceDepartmentMasterList\" [value]=\"resourceDepartment\">{{resourceDepartment.name}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <div padding-left class=\"custom-error\">\n              <ng-container *ngFor=\"let validation of validation_messages.resourceDepartmentDropDownErrorMessage\">\n                <div *ngIf=\"MPRForm.get('resourceDepartmentDropDown').hasError(validation.type) && MPRForm.get('resourceDepartmentDropDown').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n          <!-- Required  -->\n          <ion-col size=\"12\" size-lg=\"3\" class=\"resource-required\">\n            <ion-item>\n              <ion-label>Required</ion-label>\n              <ion-toggle slot=\"end\" [formControl]=\"MPRForm.controls['resourceRequiredChk']\"></ion-toggle>\n            </ion-item>\n            <div padding-left class=\"custom-error\">\n              <ng-container *ngFor=\"let validation of validation_messages.resourceRequiredChkErrorMessage\">\n                <div *ngIf=\"MPRForm.get('resourceRequiredChk').hasError(validation.type) && MPRForm.get('resourceRequiredChk').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"3\" class=\"add-resource-btn\">\n            <button mat-raised-button color=\"add-button-color\" (click)=\"onAddResourceRequirement()\" class=\"add-button-color\" [disabled]=\"MPRForm.controls['resourceRequirementDropDown'].hasError('required') || MPRForm.controls['resourceDepartmentDropDown'].hasError('required')\">Add</button>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row>\n          <ion-col>\n          <ion-card>\n          <ion-row>\n            <ion-col no-padding class=\"ion-no-margin\">\n              <ion-item lines=\"none\" style=\"--background:darkgray !important;max-width: 100% !important;\">\n                <ion-label>Requirement</ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col no-padding class=\"ion-no-margin\">\n              <ion-item lines=\"none\" style=\"--background:darkgray !important;max-width: 100% !important;\"><ion-label>Department</ion-label></ion-item> \n            </ion-col>\n            <ion-col no-padding class=\"ion-no-margin\">\n              <ion-item lines=\"none\" style=\"--background:darkgray !important;max-width: 100% !important;\"><ion-label>Required</ion-label></ion-item> \n            </ion-col>\n          </ion-row>\n          \n          <ion-row>\n            <ion-col>\n              <ion-list>\n                 <ion-item lines=\"none\" [color]=\"even? 'drak-gray' : 'white'\" *ngFor=\"let resourceRequirement of resource_requirement_List;let even = even\" \n                          style=\"max-width: 100% !important;\">\n                  <ion-label class=\"font-for-mobile\">{{resourceRequirement.Resource_requirement.name}}</ion-label>\n                  <ion-label class=\"font-for-mobile\">{{resourceRequirement.Department.name}}</ion-label>\n                  <!-- <ion-label class=\"font-for-mobile\">{{resourceRequirement.Required.isrequired ? \"YES\":\"NO\"}}</ion-label> -->\n                  <button mat-icon-button (click)=\"removeResourceRequirement(resourceRequirement)\">\n                    <mat-icon>delete</mat-icon>\n                  </button>\n                 </ion-item>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n        </ion-row>\n        \n      </ion-card>\n    </ion-grid>\n  </form>\n</ion-content>\n<ion-footer class=\"footer-back-color\">\n  <ion-row *ngIf=\"!existingMPRStatus\">\n    <ion-button style=\"width: 100%;\" no-margin (click)=\"onMPRFormSubmit(MPRForm,'NOT')\"  color=\"primary\"  size=\"large\" expand=\"full\" fill=\"outline\" \n        class=\"footer-btn-color\" [disabled]=\"!MPRForm.valid\">\n        <ion-label style=\"color: white;\">Complete</ion-label>\n    </ion-button>\n  </ion-row>\n  <ion-row *ngIf=\"existingMPRStatus\">\n    <ion-col>\n      <ion-button no-margin class=\"footer-btn-color\" color=\"primary\" size=\"large\" expand=\"full\" fill=\"outline\" (click)=\"onMPRFormSubmit(MPRForm,'true')\"> <ion-label style=\"color: white;\">Approved</ion-label></ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button no-margin class=\"footer-btn-color\"  color=\"primary\" size=\"large\" expand=\"full\" fill=\"outline\" (click)=\"onMPRFormSubmit(MPRForm,'false')\"> <ion-label style=\"color: white;\">DisApproved</ion-label>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  \n</ion-footer>\n"

/***/ }),

/***/ "./src/app/hrms/mpr-form/mpr-form.module.ts":
/*!**************************************************!*\
  !*** ./src/app/hrms/mpr-form/mpr-form.module.ts ***!
  \**************************************************/
/*! exports provided: MprFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MprFormPageModule", function() { return MprFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mpr_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mpr-form.page */ "./src/app/hrms/mpr-form/mpr-form.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");










var routes = [
    {
        path: '',
        component: _mpr_form_page__WEBPACK_IMPORTED_MODULE_6__["MprFormPage"]
    }
];
var MprFormPageModule = /** @class */ (function () {
    function MprFormPageModule() {
    }
    MprFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mpr_form_page__WEBPACK_IMPORTED_MODULE_6__["MprFormPage"]]
        })
    ], MprFormPageModule);
    return MprFormPageModule;
}());



/***/ }),

/***/ "./src/app/hrms/mpr-form/mpr-form.page.scss":
/*!**************************************************!*\
  !*** ./src/app/hrms/mpr-form/mpr-form.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n  width: 100%;\n}\n\n.custom-error {\n  padding-left: 15px;\n}\n\n.footer-back-color {\n  background-color: white;\n}\n\n.footer-btn-color {\n  background-color: #F39E20 !important;\n}\n\n.add-qualification_btn {\n  margin-top: 32px;\n}\n\n.add-button-color {\n  background-color: #F39E20 !important;\n}\n\n@media only screen and (min-height: 768px) and (min-width: 768px) {\n  .resource-required {\n    padding-top: 27px;\n  }\n}\n\n@media (max-width: 820px) {\n  .font-for-mobile {\n    font-size: small;\n  }\n}\n\n::ng-deep .select-text {\n  white-space: pre-line !important;\n}\n\n.back {\n  background-color: aqua;\n  margin: 2px;\n  padding: 5px;\n  border-radius: 10px;\n}\n\n.item-custom-label {\n  margin-left: 16px;\n  color: black;\n}\n\n.add-resource-btn {\n  padding-left: 16px !important;\n}\n\n.custom-range {\n  --knob-background: #F39E20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9ocm1zL21wci1mb3JtL21wci1mb3JtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaHJtcy9tcHItZm9ybS9tcHItZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FEUUE7RUFDRSxrQkFBQTtBQ0xGOztBRE9BO0VBQ0UsdUJBQUE7QUNKRjs7QURNQTtFQUNFLG9DQUFBO0FDSEY7O0FES0E7RUFDRSxnQkFBQTtBQ0ZGOztBRE1BO0VBQ0Usb0NBQUE7QUNIRjs7QURNQTtFQUNFO0lBQ0UsaUJBQUE7RUNIRjtBQUNGOztBREtBO0VBQ0U7SUFDRyxnQkFBQTtFQ0hIO0FBQ0Y7O0FET0U7RUFDRSxnQ0FBQTtBQ0xKOztBRFFBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDTEY7O0FET0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNKRjs7QURNQTtFQUNFLDZCQUFBO0FDSEY7O0FES0E7RUFDRSwwQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvaHJtcy9tcHItZm9ybS9tcHItZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuLnJvdW5kZWQtY29ybmVye1xuICAvL2JvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC8vYm9yZGVyOiAycHggc29saWQgIzg3OGE4NDtcbiAgLy9wYWRkaW5nOiAyMHB4O1xuICAvL3dpZHRoOiAyMDBweDtcbiAgLy9oZWlnaHQ6IDE1MHB4O1xufVxuLmN1c3RvbS1lcnJvcntcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLmZvb3Rlci1iYWNrLWNvbG9ye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5mb290ZXItYnRuLWNvbG9ye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjM5RTIwICFpbXBvcnRhbnQ7XG59XG4uYWRkLXF1YWxpZmljYXRpb25fYnRue1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuLy8gIHRleHQtYWxpZ246IGVuZDtcbiAvLyBtYXJnaW4tcmlnaHQ6IDE4cHg7XG59XG4uYWRkLWJ1dHRvbi1jb2xvcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzOUUyMCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA3NjhweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgLnJlc291cmNlLXJlcXVpcmVke1xuICAgIHBhZGRpbmctdG9wOiAyN3B4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcbiAgLmZvbnQtZm9yLW1vYmlsZSB7XG4gICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gIH1cbn1cblxuOjpuZy1kZWVwe1xuICAuc2VsZWN0LXRleHR7XG4gICAgd2hpdGUtc3BhY2U6cHJlLWxpbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLmJhY2sgeyBcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5pdGVtLWN1c3RvbS1sYWJlbHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5hZGQtcmVzb3VyY2UtYnRue1xuICBwYWRkaW5nLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcbn1cbi5jdXN0b20tcmFuZ2V7XG4gIC0ta25vYi1iYWNrZ3JvdW5kXHQ6ICNGMzlFMjA7XG59IiwiLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3VzdG9tLWVycm9yIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4uZm9vdGVyLWJhY2stY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvb3Rlci1idG4tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjM5RTIwICFpbXBvcnRhbnQ7XG59XG5cbi5hZGQtcXVhbGlmaWNhdGlvbl9idG4ge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4uYWRkLWJ1dHRvbi1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMzlFMjAgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNzY4cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAucmVzb3VyY2UtcmVxdWlyZWQge1xuICAgIHBhZGRpbmctdG9wOiAyN3B4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcbiAgLmZvbnQtZm9yLW1vYmlsZSB7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgfVxufVxuOjpuZy1kZWVwIC5zZWxlY3QtdGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xufVxuXG4uYmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5pdGVtLWN1c3RvbS1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5hZGQtcmVzb3VyY2UtYnRuIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tcmFuZ2Uge1xuICAtLWtub2ItYmFja2dyb3VuZDogI0YzOUUyMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/hrms/mpr-form/mpr-form.page.ts":
/*!************************************************!*\
  !*** ./src/app/hrms/mpr-form/mpr-form.page.ts ***!
  \************************************************/
/*! exports provided: MprFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MprFormPage", function() { return MprFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var src_provider_message_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/provider/message-helper */ "./src/provider/message-helper.ts");
/* harmony import */ var _mpr_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mpr-form.service */ "./src/app/hrms/mpr-form.service.ts");
/* harmony import */ var src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var src_app_order_approval_show_approval_details_modal_show_approval_details_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/order-approval/show-approval-details-modal/show-approval-details-modal.page */ "./src/app/order-approval/show-approval-details-modal/show-approval-details-modal.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");











var MprFormPage = /** @class */ (function () {
    function MprFormPage(fb, commonfun, msg, MPRService, loginService, el, route, router, alertCtrl) {
        this.fb = fb;
        this.commonfun = commonfun;
        this.msg = msg;
        this.MPRService = MPRService;
        this.loginService = loginService;
        this.el = el;
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        // @ViewChild('myInput',{static: false}) myInput: ElementRef;
        this.TAG = "Mpr Form Page";
        this.selectedQualificationList = [];
        this.now = new Date();
        this.year = this.now.getFullYear();
        this.month = this.now.getMonth() + 1;
        this.day = this.now.getDate();
        this.maxDate = this.year + "-" + this.month + "-" + this.day;
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["ColumnMode"];
        this.SelectionType = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["SelectionType"];
        this.page = new src_app_order_approval_show_approval_details_modal_show_approval_details_modal_page__WEBPACK_IMPORTED_MODULE_8__["Page"]();
        this.workExperienceModel_lower = 0;
        this.workExperienceModel_upper = 0;
        this.maxCTCLbl = " Lakh";
        this.disable_save_jd_btn = true;
        this.existingMPRStatus = false;
        this.validation_messages = {
            'organizationDropDownErrorMessage': [{ type: 'required', message: ' *Please Select Organization.' }],
            'documentStatusDropDownErrorMessage': [{ type: 'required', message: ' *Please Select Document Status.' }],
            'reasonForMPRDropDownErrorMessage': [{ type: 'required', message: ' *Please Select Reason for MPR.' }],
            'gradeDropDownErrorMessage': [{ type: 'required', message: '*Please Select Grade.' }],
            'jobTitleDropDownErrorMessage': [{ type: 'required', message: '*Please Select Job Title.' }],
            'designationOrRoleDropDownErrorMessage': [{ type: 'required', message: '*Please Select Designation / Role.' }],
            'departmentDropDownErrorMessage': [{ type: 'required', message: '*Please Select Department.' }],
            'locationDropDownErrorMessage': [{ type: 'required', message: '*Please Select Location.' }],
            'numberOfPositionTxtErrorMessage': [{ type: 'required', message: '*Please Enter Number Of Position.' }],
            'positionClosedTxtErrorMessage': [{ type: 'required', message: '*Please Enter Number Of Position Closed.' }],
            'workExpFromTxtErrorMessage': [{ type: 'required', message: '*Please Select Work Experience From.' }],
            'workExpFromToTxtErrorMessage': [{ type: 'required', message: '*Please Select Work Experience To.' }],
            'ctcRangeFromTxtErrorMessage': [{ type: 'required', message: '*Please Select CTC Range From.' }],
            'ctcRangeToTxtErrorMessage': [{ type: 'required', message: '*Please Select CTC Range To.' }],
            'ageFromTxtErrorMessage': [{ type: 'required', message: '*Please Select Age Range From.' }],
            'ageToTxtErrorMessage': [{ type: 'required', message: '*Please Select Age Range To.' }],
            'jobListingDropDownErrorMessage': [{ type: 'required', message: '*Please Select Job Listing.' }],
            'onCompanyRollChkErrorMessage': [{ type: 'required', message: '*Please Select Company Roll.' }],
            'qualificationDropDownErrorMessage': [{ type: 'required', message: '*Please Select Qualification.' }],
            'jobDescriptionTxtErrorMessage': [{ type: 'required', message: '*Please Select Job Description.' }],
            'resourceRequirementDropDownErrorMessage': [{ type: 'required', message: '*Please Select Resource Requirement.' }],
            'resourceDepartmentDropDownErrorMessage': [{ type: 'required', message: '*Please Select Resource Requirement.' }],
            'resourceRequiredChkErrorMessage': [{ type: 'required', message: '*Please Select Resource Required.' }]
        };
        this.MPRForm = this.fb.group({
            organizationDropDown: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reasonForMPRDropDown: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gradeDropDown: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            jobTitleDropDown: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            designationOrRoleDropDown: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            departmentDropDown: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            locationDropDown: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            numberOfPositionTxt: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            positionClosedTxt: [],
            jobListingDropDown: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            onCompanyRollChk: [],
            qualificationDropDown: [],
            jobDescriptionTxt: [],
            resourceRequirementDropDown: [],
            resourceDepartmentDropDown: [],
            resourceRequiredChk: [],
        });
    }
    MprFormPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, qualificationDropDownTemp, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _g.trys.push([0, 7, , 8]);
                        this.commonfun.loadingPresent();
                        _a = this;
                        return [4 /*yield*/, this.MPRService.getOrganizationList().toPromise()];
                    case 1:
                        _a.organizationList = _g.sent();
                        _b = this;
                        return [4 /*yield*/, this.MPRService.getQualificationList().toPromise()];
                    case 2:
                        _b.qualificationList = _g.sent();
                        _c = this;
                        return [4 /*yield*/, this.MPRService.getReasonForMPRList().toPromise()];
                    case 3:
                        _c.reasonForMPRList = _g.sent();
                        _d = this;
                        return [4 /*yield*/, this.MPRService.getJobListingList().toPromise()];
                    case 4:
                        _d.jobListingList = _g.sent();
                        _e = this;
                        return [4 /*yield*/, this.MPRService.getResourceRequirementMasterList().toPromise()];
                    case 5:
                        _e.resourceRequirementMasterList = _g.sent();
                        _f = this;
                        return [4 /*yield*/, this.MPRService.getResourceDepartmentMasterList().toPromise()];
                    case 6:
                        _f.resourceDepartmentMasterList = _g.sent();
                        if (this.selectedQualificationList == undefined || this.selectedQualificationList.length == 0) {
                            qualificationDropDownTemp = null;
                            qualificationDropDownTemp = this.MPRForm.get('qualificationDropDown');
                            qualificationDropDownTemp.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                            qualificationDropDownTemp.updateValueAndValidity();
                        }
                        this.route.queryParams.subscribe(function (params) {
                            if (params && params.special) {
                                _this.existingMPR = JSON.parse(params.special);
                                if (!!_this.existingMPR) {
                                    _this.existingMPRStatus = true;
                                    _this.bindExistingData();
                                }
                                console.log(_this.TAG, JSON.parse(params.special));
                            }
                        });
                        this.commonfun.loadingDismiss();
                        return [3 /*break*/, 8];
                    case 7:
                        error_1 = _g.sent();
                        this.commonfun.loadingDismiss();
                        console.log(this.TAG, error_1);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    MprFormPage.prototype.ionViewWillEnter = function () {
        try {
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    };
    MprFormPage.prototype.refreshPage = function () {
        try {
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    };
    MprFormPage.prototype.bindExistingData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                try {
                    // this.existingMPRStatus
                    this.organizationList.forEach((function (org) {
                        if (org.id == _this.existingMPR.org_id) {
                            _this.selectedOrganization = org;
                            _this.onOrganizationChange();
                        }
                    }));
                    this.reasonForMPRList.forEach((function (reason) {
                        if (reason.code == _this.existingMPR.mpr_reason.code) {
                            _this.MPRForm.controls.reasonForMPRDropDown.setValue(reason);
                        }
                    }));
                    this.MPRForm.controls.numberOfPositionTxt.setValue(this.existingMPR.number_of_position);
                    this.workExperienceModel = { lower: Number(this.existingMPR.work_rang_from), upper: Number(this.existingMPR.work_rang_to) };
                    this.CTCRangeModel = { lower: Number(this.existingMPR.ctc_rang_from), upper: Number(this.existingMPR.ctc_rang_to) };
                    this.AgeRangeModel = { lower: Number(this.existingMPR.age_rang_from), upper: Number(this.existingMPR.age_rang_to) };
                    this.jobListingList.forEach(function (jobList) {
                        if (jobList.code = _this.existingMPR.Job_list.code)
                            _this.selectedJobListing = jobList;
                    });
                    this.qualificationList.forEach(function (qualification) {
                        if (qualification.qualification_id = _this.existingMPR.Qualification_List[0].qualification_id) {
                            _this.selectedQualificationList = [qualification];
                            if (_this.selectedQualificationList == undefined || _this.selectedQualificationList.length == 0) {
                                var control1 = null;
                                control1 = _this.MPRForm.get('qualificationDropDown');
                                control1.clearValidators();
                                control1.updateValueAndValidity();
                            }
                        }
                    });
                    this.MPRForm.controls.onCompanyRollChk.setValue(this.existingMPR.on_company_roll);
                }
                catch (error) {
                    console.log(this.TAG, error);
                }
                return [2 /*return*/];
            });
        });
    };
    MprFormPage.prototype.onOrganizationChange = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, error_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.MPRService.getMPRMasterDataList(this.selectedOrganization).toPromise()];
                    case 1:
                        _a.MPRMasterDataList = _b.sent();
                        console.log(this.TAG, this.MPRMasterDataList);
                        this.activityLbl = this.MPRService.activity_name;
                        this.organizationList.forEach((function (organization) {
                            if (organization.hasOwnProperty('hrbranch')) {
                                _this.taggedHRBranchLbl = organization.name;
                            }
                        }));
                        this.jobTitleList = this.MPRMasterDataList.jobtitlename.JobTitleList;
                        this.gradeList = this.MPRMasterDataList.Gradename.GradeList;
                        this.departmentList = this.MPRMasterDataList.Department.DepartmentList;
                        this.locationList = this.MPRMasterDataList.Locationname.LocationList;
                        this.designationOrRoleList = this.MPRMasterDataList.Rolename.RoleList;
                        if (!!this.existingMPR) {
                            this.jobTitleList.forEach((function (job) { if (job.Standardtemp_id == _this.existingMPR.Standardtemp_id) {
                                _this.selectedJOBTitle = job;
                            } }));
                            this.gradeList.forEach((function (grade) { if (grade.grade_id == _this.existingMPR.grade_id) {
                                _this.selectedGrade = grade;
                            } }));
                            this.departmentList.forEach((function (department) {
                                if (department.department_id == _this.existingMPR.department_id) {
                                    _this.selectedDepartment = department;
                                }
                            }));
                            this.locationList.forEach((function (location) {
                                if (location.location_id == _this.existingMPR.location_id) {
                                    _this.selectedLocation = location;
                                }
                            }));
                            this.designationOrRoleList.forEach((function (role) {
                                if (role.role_id == _this.existingMPR.role_id) {
                                    _this.selectedDesignation = role;
                                }
                            }));
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _b.sent();
                        console.log(this.TAG, error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MprFormPage.prototype.onReasonForMPRChange = function () {
        try {
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    };
    MprFormPage.prototype.onGradeChange = function () {
        try {
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    };
    MprFormPage.prototype.onJobTitleChange = function () {
        try {
            console.log(this.TAG, this.MPRForm.controls['jobTitleDropDown'].value);
            this.jobDescriptionList = this.MPRForm.controls['jobTitleDropDown'].value.Job_Description_List;
            // this.resourceRequirementList = this.MPRForm.controls['jobTitleDropDown'].value.Resource_requirement_List;
            this.resource_requirement_List = this.MPRForm.controls['jobTitleDropDown'].value.Resource_requirement_List;
            if (this.resource_requirement_List == undefined || this.resource_requirement_List.length == 0) {
                var control1 = null;
                control1 = this.MPRForm.get('resourceRequirementDropDown');
                control1.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                control1.updateValueAndValidity();
                var control2 = null;
                control2 = this.MPRForm.get('resourceDepartmentDropDown');
                control2.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                control2.updateValueAndValidity();
            }
            //  console.log(this.TAG, this.resource_requirement_List);
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    };
    MprFormPage.prototype.onDesignationOrRoleChange = function () {
        try {
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    };
    MprFormPage.prototype.onDepartmentChange = function () {
        try {
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    };
    MprFormPage.prototype.onLocationChange = function () {
        try {
            var ionSelects = document.querySelectorAll('ion-select');
            ionSelects.forEach(function (sel) {
                sel.shadowRoot.querySelectorAll('.select-text')
                    .forEach(function (elem) {
                    //  console.log("HTML",elem);
                    //  setTimeout(() => {
                    //   console.log("HTML",elem.textContent);
                    //   let test = elem.textContent;
                    //   var split_str = test.split(",");
                    //   if(split_str.length > 1){
                    //     console.log("HTML DATA",split_str);
                    //     let tags = split_str.map(skill => `<ion-badge style="background: #27AE60 !important;margin: 2px;padding: 5px;border-radius: 10px;">${skill}</ion-badge>`).join('');
                    //     elem.innerHTML = tags;
                    //   }
                    //  }, 1000);
                    // var test = elem.toString();
                    //  var result = test.match(/<div>(.*?)<\/div>/g).map(function(val){
                    //   return val.replace(/<\/?div>/g,'');
                    //  });
                    //   console.log("TET ",test);
                    elem.setAttribute('style', 'white-space: break-spaces !important;');
                });
            });
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    };
    MprFormPage.prototype.onQualificationChange = function () {
        try {
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    };
    MprFormPage.prototype.removeSelectedQualification = function (selectedQualification) {
        try {
            var result = this.selectedQualificationList.filter(function (item) { return item.id != selectedQualification.id; });
            this.selectedQualificationList = result;
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    };
    MprFormPage.prototype.onAddQualification = function () {
        var _this = this;
        try {
            //console.log(this.TAG,"onAddQualification",this.MPRForm.controls['qualificationDropDown'].value);    
            if (this.MPRForm.controls['qualificationDropDown'].value != null) {
                if (this.selectedQualificationList.length > 0) {
                    var sameQualificationCheck = this.selectedQualificationList.find(function (e) { return e.id === _this.MPRForm.controls['qualificationDropDown'].value.id; });
                    if (sameQualificationCheck != null || sameQualificationCheck != undefined) {
                        this.commonfun.presentAlert("MPR Form", "Validation", " This qualification is already added");
                    }
                    else {
                        var temp1 = {
                            "code": this.MPRForm.controls['qualificationDropDown'].value.code,
                            "qualification_id": this.MPRForm.controls['qualificationDropDown'].value.id,
                            "name": this.MPRForm.controls['qualificationDropDown'].value.name
                        };
                        this.selectedQualificationList.push(temp1);
                    }
                }
                else {
                    var temp = {
                        "code": this.MPRForm.controls['qualificationDropDown'].value.code,
                        "qualification_id": this.MPRForm.controls['qualificationDropDown'].value.id,
                        "name": this.MPRForm.controls['qualificationDropDown'].value.name
                    };
                    this.selectedQualificationList = [temp];
                }
            }
            else {
                this.commonfun.presentAlert("MPR Form", "Validation", "Please select qualification");
            }
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    };
    MprFormPage.prototype.onWorkExperienceChange = function (data) {
        // console.log(data);
        this.workExperienceModel_lower = data.lower;
        this.workExperienceModel_upper = data.upper;
    };
    MprFormPage.prototype.onCTCRangeChange = function (selectedCTC) {
        this.CTCRangeModel_lower = selectedCTC.lower;
        this.CTCRangeModel_upper = selectedCTC.upper;
        if (this.CTCRangeModel_upper == 100) {
            this.maxCTCLbl = " CR";
            this.CTCRangeModel_upper = 1;
        }
        else {
            this.maxCTCLbl = " Lakh";
        }
    };
    MprFormPage.prototype.onAgeRangeChange = function (selectedAgeRange) {
        this.AgeRangeModel_lower = selectedAgeRange.lower;
        this.AgeRangeModel_upper = selectedAgeRange.upper;
    };
    MprFormPage.prototype.editSelectedJobDescription = function (selectedJD) {
        try {
            this.disable_save_jd_btn = false;
            this.MPRForm.controls.jobDescriptionTxt.setValue(selectedJD.job_description);
            this.selectedJDForEdit = selectedJD;
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    };
    MprFormPage.prototype.onSaveJD = function () {
        var _this = this;
        try {
            var jdId = this.jobDescriptionList.findIndex(function (jd) { return jd.job_des_id === _this.selectedJDForEdit.job_des_id; });
            this.jobDescriptionList[jdId].job_description = this.MPRForm.get('jobDescriptionTxt').value;
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    };
    MprFormPage.prototype.onAddResourceRequirement = function () {
        try {
            var resource = {
                "Resource_requirement": {
                    "id": this.MPRForm.get('resourceRequirementDropDown').value.id,
                    "name": this.MPRForm.get('resourceRequirementDropDown').value.name,
                    "code": this.MPRForm.get('resourceRequirementDropDown').value.code
                },
                "Department": {
                    "id": this.MPRForm.get('resourceDepartmentDropDown').value.id,
                    "name": this.MPRForm.get('resourceDepartmentDropDown').value.name,
                    "code": this.MPRForm.get('resourceDepartmentDropDown').value.code
                },
                "Required": {
                    "isrequired": this.MPRForm.get('resourceRequiredChk').value
                }
            };
            //console.log(this.MPRForm.get('resourceRequirementDropDown').value);
            if (!!this.resource_requirement_List) {
                this.resource_requirement_List.push(resource);
            }
            else {
                this.resource_requirement_List = [resource];
                // console.log(this.resource_requirement_List);
            }
        }
        catch (error) {
        }
    };
    MprFormPage.prototype.removeResourceRequirement = function (resourceRequirement) {
        console.log(this.TAG, resourceRequirement);
        var result = this.resource_requirement_List.filter(function (item) { return item.Resource_requirement.id != resourceRequirement.Resource_requirement.id; });
        this.resource_requirement_List = result;
    };
    MprFormPage.prototype.presentAlert = function (Header, SubHeader, Message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: Header,
                            subHeader: SubHeader,
                            message: Message,
                            buttons: [{
                                    text: "OK",
                                    handler: function (ok) {
                                        _this.router.navigateByUrl('/home');
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.dismiss(function () { return console.log('The alert has been closed.'); });
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MprFormPage.prototype.onMPRFormSubmit = function (MPRForm, status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mprPostData, postMPRForm, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 10, , 11]);
                        console.log(this.TAG, "Location", this.MPRForm.get('locationDropDown').value);
                        if (!(this.CTCRangeModel != undefined && this.CTCRangeModel.upper != undefined && this.CTCRangeModel.upper != 0)) return [3 /*break*/, 8];
                        if (!(this.AgeRangeModel != undefined && this.AgeRangeModel.upper != undefined && this.AgeRangeModel.upper != 0)) return [3 /*break*/, 6];
                        if (!(!!this.selectedQualificationList && this.selectedQualificationList.length > 0)) return [3 /*break*/, 4];
                        if (!(!!this.jobDescriptionList && this.jobDescriptionList.length > 0)) return [3 /*break*/, 2];
                        mprPostData = {
                            "Standardtemp_id": this.MPRForm.controls['jobTitleDropDown'].value.Standardtemp_id,
                            "org_id": this.MPRForm.get('organizationDropDown').value.id,
                            "mpr_reason_code": this.MPRForm.get('reasonForMPRDropDown').value.code,
                            "grade_id": this.MPRForm.get('gradeDropDown').value.grade_id,
                            "role_id": this.MPRForm.get('designationOrRoleDropDown').value.role_id,
                            "department_id": this.MPRForm.get('departmentDropDown').value.department_id,
                            "location_id": this.MPRForm.get('locationDropDown').value.location_id,
                            "number_of_position": this.MPRForm.get('numberOfPositionTxt').value,
                            "position_closed": "",
                            "work_rang_from": this.workExperienceModel_lower,
                            "work_rang_to": this.workExperienceModel_upper,
                            "ctc_rang_from": this.CTCRangeModel.lower,
                            "ctc_rang_to": this.CTCRangeModel.upper,
                            "age_rang_from": this.AgeRangeModel.lower,
                            "age_rang_to": this.AgeRangeModel.upper,
                            "job_list_code": this.MPRForm.get('jobListingDropDown').value.code,
                            "on_company_roll": this.MPRForm.get('onCompanyRollChk').value,
                            "qualification": this.selectedQualificationList,
                            "Job_Description_List": this.jobDescriptionList,
                            "Resource_requirement_List": this.resource_requirement_List,
                            "is_update": this.existingMPRStatus,
                            "is_approve": status,
                            "mpr_id": this.existingMPR.mpr_id ? this.existingMPR.mpr_id : '0'
                        };
                        return [4 /*yield*/, this.MPRService.postMPRForm(mprPostData).toPromise()];
                    case 1:
                        postMPRForm = _a.sent();
                        console.log(this.TAG, "Post Form", mprPostData);
                        if (!!postMPRForm && postMPRForm.resposemsg == "Success") {
                            console.log(this.TAG, postMPRForm);
                            this.presentAlert("MPR Form", postMPRForm.resposemsg, postMPRForm.logmsg);
                        }
                        else {
                            console.log(this.TAG, postMPRForm);
                            this.commonfun.presentAlert("MPR Form", "Error", "Some things went wrong please try again.");
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        this.commonfun.presentAlert("MPR Form", "Validation", "Job Description Can Not Be Empty");
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        this.commonfun.presentAlert("MPR Form", "Validation", "Please Add Qualification");
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        this.commonfun.presentAlert("MPR Form", "Validation", "Please Select Age Range");
                        _a.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        this.commonfun.presentAlert("MPR Form", "Validation", "Please Select CTC Range");
                        _a.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        error_3 = _a.sent();
                        console.log(this.TAG, error_3);
                        this.commonfun.presentAlert("MPR Form", "Error", error_3.message);
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    MprFormPage.prototype.approved = function () {
        try {
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    };
    MprFormPage.prototype.disApproved = function () {
        try {
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    };
    MprFormPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_3__["Commonfun"] },
        { type: src_provider_message_helper__WEBPACK_IMPORTED_MODULE_4__["Message"] },
        { type: _mpr_form_service__WEBPACK_IMPORTED_MODULE_5__["MprFormService"] },
        { type: src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__["LoginauthService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"] }
    ]; };
    MprFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-mpr-form',
            template: __webpack_require__(/*! raw-loader!./mpr-form.page.html */ "./node_modules/raw-loader/index.js!./src/app/hrms/mpr-form/mpr-form.page.html"),
            styles: [__webpack_require__(/*! ./mpr-form.page.scss */ "./src/app/hrms/mpr-form/mpr-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_provider_commonfun__WEBPACK_IMPORTED_MODULE_3__["Commonfun"], src_provider_message_helper__WEBPACK_IMPORTED_MODULE_4__["Message"],
            _mpr_form_service__WEBPACK_IMPORTED_MODULE_5__["MprFormService"], src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__["LoginauthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"]])
    ], MprFormPage);
    return MprFormPage;
}());



/***/ })

}]);
//# sourceMappingURL=hrms-mpr-form-mpr-form-module-es5.js.map