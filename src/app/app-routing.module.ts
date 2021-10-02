import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPortfolioComponent } from './clientPortfolio/clintPortfolio.component';
import { CommercialContractsComponent } from './commercialContracts/commercialContracts.component';
import { CommercialLawComponent } from './commercialLaw/commercialLaw.component';
import { CompanyManagementComponent } from './companyManagement/companyManagement.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EmplotmentPensionsComponent } from './employment&pensions/employment&pensions.component';
import { HomeComponent } from './index/index.component';
import { IpComponent } from './ip/ip.component';
import { PreventiveLawComponent } from './preventiveLaw/preventiveLaw.component';
import { PropertyLawComponent } from './propertyLaw/propertyLaw.component';
import { PublicationsComponent } from './publications/publications.component';
import { PublicProcurementComponent } from './publicProcurement/publicProcurement.component';
import { TaxComponent } from './tax/tax.component';
import { TheFirmComponent } from './theFirm/theFirm.component';
import { TheTeamComponent } from './theTeam/theFirm.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "theFirm", component: TheFirmComponent},
  {path: "theTeam", component: TheTeamComponent},
  {path: "clientPortfolio", component: ClientPortfolioComponent},
  {path: "publications", component: PublicationsComponent},
  {path: "contacts", component: ContactsComponent},
  {path: "preventiveLaw", component: PreventiveLawComponent},
  {path: "commercialContracts", component: CommercialContractsComponent},
  {path: "employmentPensions", component: EmplotmentPensionsComponent},
  {path: "commercialLaw", component: CommercialLawComponent},
  {path: "companyManagement", component: CompanyManagementComponent},
  {path: "tax", component: TaxComponent},
  {path: "publicProcurement", component: PublicProcurementComponent},
  {path: "propertyLaw", component: PropertyLawComponent},
  {path: "intellectualProperty", component: IpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
