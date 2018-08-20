using FoodAPICore.Entities;
using System.Threading.Tasks;

namespace FoodAPICore.Services
{
    public interface IEnsureDatabaseDataService
    {
        Task Initialize(FoodDbContext context);
    }
}
