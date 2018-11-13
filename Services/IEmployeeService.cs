using System.Collections;
using System.Collections.Generic;
using MAP_Web.Models;


namespace MAP_Web.Services
{
    public interface IEmployeeService
    {
         void Create(Employee employee);
         IEnumerable<Employee>Get();
         EmployeePaged GetPaged(int pageIndex,int pageSize,string sortedBy,string direction);
    }
}