﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ordering.API.Model
{
    public class OrderItem
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal InitialUnitPrice { get; set; }
        public int Quantity { get; set; }
        public string PictureUrl { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            var results = new List<ValidationResult>();

            if (Quantity < 1)
            {
                results.Add(new ValidationResult("Invalid number of units", new[] { "Quantity" }));
            }

            if(UnitPrice <= 0)
            {
                results.Add(new ValidationResult("Invalid unit price", new[] { "UnitPrice" }));
            }
            return results;
        }
    }
}