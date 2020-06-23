<?php

namespace Tests;

use Illuminate\Foundation\Testing\RefreshDatabase;
// use Illuminate\Foundation\Testing\TestCase;
use Tests\TestCase as BestTestCase;

abstract class TestCase extends BaseTestCase
{
    use RefreshDatabase;
    use CreatesApplication;
    protected function tearDown():void {
        $instances_names = ['config', 'url', 'request', 'html', 'Illuminate\Contracts\Http\Kernel'];
        $instances = [];

        foreach($instances_names as $instance_name):
          $instances[$instance_name] = app($instance_name);
        endforeach;

        parent::tearDown();

        foreach($instances as $instance_name => $instance):
          app()->instance($instance_name, $instance);
        endforeach;
    }
}
