<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Requests\PostStoreRequest;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{


    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        Auth::check();
        $page = $request->get('page');
        $limit = $request->get('limit');
        $posts = Post::all()->skip(($page | 1 - 1) * $limit)->take($limit);
        if (count($posts) > 0) {
            // return response()->json(['posts' => $posts, 'page' => $page, 'limit' => $limit, 'total' => '$total', 'count' => count($posts)], 200);
            return response()->json([
                'status' => 'ok',
                'data' => $posts
            ], 200);
        } else {
            return response()->json(['message' => 'No posts found'], 200);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PostStoreRequest $request)
    {
        $newPost = Post::create($request->all());
        return response()->json(['message' => 'Post created successfully'], 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id, Request $request)
    {
        $post = Post::find($id);
        if ($post) {
            return response()->json($post);
        } else {
            return response()->json(['message' => 'Post not found'], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $updatedPost = Post::where('id', $id)->update($request->all());
        return response()->json(['message' => 'Post updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $deletedPost = Post::where('id', $id)->delete();
        return response()->json(['message' => 'Post deleted successfully'], 200);
    }
}