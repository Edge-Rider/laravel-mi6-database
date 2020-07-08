<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SimpleTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function testProductsPageReturns404()
    {
        $response = $this->get('/products');

        $response->assertStatus(404);
    }

    public function testHomepageContainsNavigation()
    {
        $response = $this->get('/');

        $response->assertSee('TOPMENU');
    }
}
