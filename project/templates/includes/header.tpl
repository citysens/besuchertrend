<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <title>{$config->getProjectName()|default:'-'}{if isset($title)} - {$title}{/if}</title>

    {if $config->getDebug()}
        <link rel="stylesheet" href="/framework-static/css/reset.css"/>
        <link rel="stylesheet" href="/static/css/libs/leaflet.css"/>

        <link rel="stylesheet" href="/static/css/fonts.css"/>
        <link rel="stylesheet" href="/static/css/base.css" />
        <link rel="stylesheet" href="/static/css/project.css" />
    {else}
        <link rel="stylesheet" href="/static/css/dist/libs.min.css"/>
        <link rel="stylesheet" href="/static/css/dist/project.min.css" />
    {/if}

    {if $config->getDebug()}
        <script type="text/javascript" src="/static/js/libs/01-jquery-3.6.0.min.js"></script>
        <script type="text/javascript" src="/static/js/libs/40-leaflet.js"></script>
        <script type="text/javascript" src="/static/js/libs/41-L.Control.Locate.min.js"></script>
        <script type="text/javascript" src="/static/js/libs/50-leaflet-heat.js"></script>
    {else}
        <script type="text/javascript" src="/static/js/dist/libs.min.js"></script>
    {/if}

    {if $config->getDebug()}
        <script type="text/javascript" src="/framework-static/js/framework-util.js"></script>
    {else}
        <script type="text/javascript" src="/framework-static/js/dist/crtx.min.js"></script>
    {/if}

    {if $config->getDebug()}
        <script type="text/javascript" src="/static/js/util.js"></script>
        <script type="text/javascript" src="/static/js/main.js"></script>
        <script type="text/javascript" src="/static/js/locations.js"></script>
    {else}
        <script type="text/javascript" src="/static/js/dist/project.min.js"></script>
    {/if}

    {include file='includes/favicons.tpl'}
</head>
<body>

<div class="container">
    {* Main content block *}
    <div class="content-wrapper">
            <div class="content">
