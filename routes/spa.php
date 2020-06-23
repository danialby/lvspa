<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| SPA Routes
|--------------------------------------------------------------------------
|
| Here is where you can register SPA routes for your frontend. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "spa" middleware group.
|
*/
// Route::get('/SendCode/{id}/{mob}','SmsController@sendcode');
Route::post('/AjaxSend', 'AjaxController@ajaxRequestPost');
// Route::post('/UploadImg', 'AjaxController@uploadImg');
Route::get('/StatInit/{reqCode}','StatusController@statInit');
Route::post('/StatCodeGet/{reqID}/{uCode}','StatusController@codeGet');
Route::post('/forgotCode/{mob}','StatusController@forgotCode');
Route::get('/reqInit/{mob}','AloController@reqinit');
// Route::get('/Admin', 'AdminController@index');
Route::get('/fetchData','AdminController@fetchData');
Route::get('/UpdateReq/{id}/{reqCode}/{reqStat}/{reqReply}/{isReg}','AdminController@UpdateReq');
Route::get('/RemoveReq/{id}','AdminController@RemoveReq');
Route::get('/ReqCodeUpdate/{reqCode}/{mob}','AdminController@Smsed');
Route::get('/CheckRegistered/{reqCode}','AdminController@isRegistered');
Route::get('{path}', 'SpaController')->where('path', '(.*)');
// Route::get('/clear-cache', function() {
//     $configCache = Artisan::call('config:cache');
//     $clearCache = Artisan::call('cache:clear');
//     // return what you want
// });

