import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommercialContractsComponent } from './commercialContracts/commercialContracts.component';
import { CommercialLawComponent } from './commercialLaw/commercialLaw.component';
import { EmplotmentPensionsComponent } from './employment&pensions/employment&pensions.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './hearder/header.component';
import { HomeComponent } from './index/index.component';
import { IpComponent } from './ip/ip.component';
import { PreventiveLawComponent } from './preventiveLaw/preventiveLaw.component';
import { PropertyLawComponent } from './propertyLaw/propertyLaw.component';
import { PublicProcurementComponent } from './publicProcurement/publicProcurement.component';
import { TaxComponent } from './tax/tax.component';
import { TheFirmComponent } from './theFirm/theFirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TheFirmComponent,
    FooterComponent,
    PreventiveLawComponent,
    CommercialContractsComponent,
    EmplotmentPensionsComponent,
    CommercialLawComponent,
    TaxComponent,
    PublicProcurementComponent,
    PropertyLawComponent,
    IpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
