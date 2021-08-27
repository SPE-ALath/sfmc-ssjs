<script runat="server" language="javascript">
	Platform.Load("Core", "1.1.1");
	
	// Load SSJS Library
	Platform.function.ContentBlockByKey("email360-ssjs-lib");
	
	
		var obj = Platform.Function.LookupRows('Users-All');
		Write(Stringify(obj));
	
</script>
