<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Request;

class BooksController extends Controller
{
    //
    public function getAllBooks(Request $request)
    {
        $searchTerm = $request->input("searchText");
        // logic to get all Books goes here
        $books = Book::query()
            ->where('title', 'LIKE', "%{$searchTerm}%")
            ->get()->toJson(JSON_PRETTY_PRINT);
        return response($books, 200);
    }

    public function createBook(Request $request)
    {
        // logic to create a Book record goes here
        $book = new Book();
        $book->title = $request->title;
        $book->price = $request->price;
        $book->author = $request->author;
        $book->description = $request->description;
        $book->language = $request->language;
        $book->rating = $request->rating;
        $book->img = $request->img;
        $book->save();

        return response()->json([
            "message" => "Book created"
        ], 201);
    }

    public function getBook($id)
    {
        // logic to get a Book record goes here
        if (Book::where('id', $id)->exists()) {
            $book = Book::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($book, 200);
        } else {
            return response()->json([
                "message" => "Book not found"
            ], 404);
        }
    }

    public function updateBook(Request $request, $id)
    {
        // logic to update a Book record goes here
        // logic to get a Book record goes here
        if (Book::where('id', $id)->exists()) {
            Book::where('id', $id)->first()->update($request->all());
            return response()->json([
                "message" => "Book Details Updated Successfully"
            ], 200);
        } else {
            return response()->json([
                "message" => "Book not found"
            ], 404);
        }
    }

    public function deleteBook($id)
    {
        // logic to delete a Music record goes here
        Book::findOrFail($id)->first()->delete();
        return response()->json([
            "message" => "Book Details Deleted Successfully"
        ], 200);

    }


    public function uploadBookImage(Request $request)
    {
        if ($request->hasFile('file')) {
            $file = $request->file('file');

            $file_name = time() . '.' . $file->getClientOriginalExtension();
            $destinationPath = public_path('/images');

            $file->move($destinationPath, $file_name);

            return response()->json([
                'data' => 'images/' . $file_name
            ]);
        }
    }
}
