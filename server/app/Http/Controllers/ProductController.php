<?php
namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ShoppingList;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function store(Request $request, $shoppingListId)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'quantity' => 'required|integer|min:1',
        ]);

        $shoppingList = ShoppingList::findOrFail($shoppingListId);

        $product = $shoppingList->products()->create([
            'name' => $request->name,
            'quantity' => $request->quantity,
        ]);

        return response()->json($product, 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'is_purchased' => 'required|boolean',
        ]);

        $product = Product::findOrFail($id);
        $product->update(['is_purchased' => $request->is_purchased]);

        return response()->json($product);
    }
}
