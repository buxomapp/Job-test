<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['shopping_list_id', 'name', 'quantity', 'is_purchased'];

    public function shoppingList()
    {
        return $this->belongsTo(ShoppingList::class);
    }
}
