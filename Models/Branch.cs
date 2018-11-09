using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MAP_Web.Models
{
   public class Branch
    {
        public int id {get; set;}
        
        public string dbaName {get; set;}
		
        public string adminContactPerson {get; set;}
		
        public string dbaAddress1 {get; set;}
		
        public string dbaAddress2 {get; set;}
		
        public string dbaAddress3 {get; set;}
		
        public string dbaAddress4 {get; set;}
		
        public int dbaCity  {get; set;}  ////
		
		public string branchPhoneNumber {get; set;}
		
		public string branchMobileNumber {get; set;}
		
		public bool isAtmDebit {get; set;}
		
		public string numberOfDebitTidAtm {get; set;}
		
		public string mdrAtm {get; set;}
		
		public bool isSmGiftCard {get; set;}
		
		public string mdrSmGiftCard {get; set;}
		
		public bool isSmShopCard {get; set;}		
		
		public string mdrSmShopCard {get; set;}
		
		public bool isCashAgad {get; set;}
		
		public string numberOfDebitTidCashAgad {get; set;}
		
		public string mdrCashAgad {get; set;}
		
        public int mcc {get; set;}  ////

        public decimal intesCodeForDiners {get; set;}

        public string tppOnly {get; set;}

        public  int strategicMerchant {get; set;}  ////

        public string mcAssignId {get; set;}

        public int areaMallCode {get; set;} ////

        public string imprinterName {get; set;}

        public string imprinterNumber {get; set;}

        public string imprinterAmex {get; set;}

        public string imprinterDc {get; set;}

        public string imprinterJcb {get; set;}

        public string imprinterOthers {get; set;}

        public string totalNumberOfManualImprinters {get; set;}

        public string holdOutAccountNumber {get; set;}

        public string holdOutAmount {get; set;}

        public bool directPaymentLink {get; set;}

        public int fraudToolProvider {get; set;}   ////

        public int gatewayIntegrationType {get; set;} ////

        public string principalDetailsRemarks {get; set;}		
		
		//
		

		
		//
		
		public string businessName {get; set;}
		
		public string registeredBusinessNumber {get; set;}
		
		public string branchEmailAddress {get; set;}
		
		public string branchWebsite {get; set;}
		
		public string paymentMethodCreditFac {get; set;}
		
		public string settleAccountNumber {get; set;}
		
		public int taxCode {get; set;} ////
		
		public int taxType {get; set;} ////
		
        public Nullable<System.DateTime> taxExemptValidityFrom {get; set;}

        public Nullable<System.DateTime> taxExemptValidityTo {get; set;}

        public string taxExemptCertIssuedBy {get; set;}

        public string taxExemptClass {get; set;}

        public string tin {get; set;}

        public string specialMailingAdd1 {get; set;}
		
        public string specialMailingAdd2 {get; set;}
		
        public string specialMailingAdd3 {get; set;}
		
        public string specialMailingAdd4 {get; set;}

		public int specialMailingCity {get; set;}   ////

 		public int specialMailingZipCode {get; set;}  ////

        public bool withExistingAcquirer {get; set;}

        public string nameOfAcquirer {get; set;}

        public bool withInstallECR {get; set;}

        public string serviceProvider {get; set;}

        public string settlementAccNoForDebit {get; set;}

        public string payeesName {get; set;}

        public string emailAddressForReportDist {get; set;}

        public string mailingAddressForPaymentDel {get; set;}

        public int reportSetting {get; set;} ////

        public string emailAddressForReportSetting {get; set;}

        public string storeId {get; set;}

        public string smShopCard {get; set;}

        public string smGiftCard {get; set;}

        public string debitFacilityRemarks {get; set;}

       	public string nameAuthorizedSoaRecip {get; set;}

        public string soaEmailAddress {get; set;}

        public bool reportDistribution {get; set;}

        public string ownerName {get; set;}

        public Nullable<System.DateTime> ownerBirthday {get; set;}

        public string spouseName {get; set;}

        public string merchDiscountRateDebitCrd {get; set;}

        public string IntesCodeForDiners {get; set;}

        public MaintenanceMaster defaultTransactionSource {get; set;}

        public string payDelayDays {get; set;}

        public string otherDetailRemarks {get; set;}

        public string dccRebateRate {get; set;}

        public string thirdPartyCasa {get; set;}

        public string otherEmailAddress {get; set;}

        public string otherMobileNumber {get; set;}

        public string typeOfRelatedParty {get; set;}

        public string riNameRelation {get; set;}

        public string nameOfPep {get; set;}

        public Nullable<System.DateTime> cnpOrientationDate {get; set;}		

        public string crteIssuedByCnp {get; set;}		
		
        public Nullable<System.DateTime> validFrom {get; set;}

        public Nullable<System.DateTime> validUntil {get; set;}			

   
		
    }
}
