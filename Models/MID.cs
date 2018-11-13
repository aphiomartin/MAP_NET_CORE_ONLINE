using System;

namespace MAP_Web.Models
{
    public class MID
    {
        public int Id { get; set; }
        public int cardPlans { get; set; }
        public int monitorCode { get; set; }
        public int defaultTransSrc { get; set; }
        public bool currencyPhp { get; set; }
        public bool currencyUsd { get; set; }
        public bool majorPurchase { get; set; }
        public bool offUs { get; set; }
        public int status { get; set; }
        public string cupAcceptorId { get; set; }
        public int serviceFeeStraight { get; set; }
        public int merchantGroupCode { get; set; }
        public string serviceFeeRate { get; set; }
        public string amexMna { get; set; }
        public bool intesCode { get; set; }
        public string payDelayDays { get; set; }
        public string merchantPromotionsGroup { get; set; }
        public int defaultMpPromotion { get; set; }
        public bool forMoto { get; set; }
        public string dccMarkupRate { get; set; }
        public string dccMerchantRebate { get; set; }
        public int BranchId { get; set; }
        public Branch Branch { get; set; }
    }
}