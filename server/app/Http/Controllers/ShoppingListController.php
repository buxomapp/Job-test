<?php
namespace App\Http\Controllers;

use App\Models\ShoppingList;
use Illuminate\Http\Request;

class ShoppingListController extends Controller
{
    public function index()
    {
        return ShoppingList::with('products')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $shoppingList = ShoppingList::create([
            'name' => $request->name,
        ]);

        return response()->json($shoppingList, 201);
    }

    public function show($id)
    {
        $shoppingList = ShoppingList::with('products')->findOrFail($id);
        return response()->json($shoppingList);
    }
}
