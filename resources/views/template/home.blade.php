@extends('template.layouts.layout_main')

@section('content')
	@include('template.include.header')
	@include('template.include.slider')
	@include('template.include.winner_section')
	@include('template.include.banner')
	@include('template.include.banner_2')
	@include('template.include.footer')
@endsection

@section('link')
	<!-- google fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Krona+One&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
	<!-- / google fonts -->

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

	<script src="https://cdn.tailwindcss.com"></script>
	<link href="{{ asset('css/template/main.css') }}" rel="stylesheet"/>
@endsection
