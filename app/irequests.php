<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class irequests extends Model
{
    protected $fillable = ['fullname','email','mobile','model','subject','details','contactType','reqCode'];
}
