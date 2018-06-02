﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Ordering.API.Model
{
    public interface IOrderRepository
    {
        Task<Order> AddOrderAsync(Order order);
        Task<Order> GetOrderAsync(string orderId);
        Task<Order> UpdateOrderAsync(Order order);
        Task<bool> DeleteOrderAsync(string orderId);
        Task<IEnumerable<Order>> GetOrdersAsync();
    }
}
