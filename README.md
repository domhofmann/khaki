A shorthand language for iOS development. 

This:

```coffee
# variable assignment and autoreleased constructor
someView = UIView!

# selector invocation and CGRect shortcut
someView setFrame:@(0, 0, 200, 200)

# conditionals, string literals, and nested selectors
if someCondition
	path = 'http://google.com'
	req = NSURLRequest! withURL:(NSURL! withString:path)
else
 	uppercase = 'THIS TEXT IS CAPITALIZED'
	lowercase = capitalizedText lowercaseString
	hello = ('hello/world' componentsSeparatedByString:'/') objectAtIndex:2
end

# strict typing
SomeType somePointer = SomeClass giveMeSomeType
uint ~somePrimitive = 100

# fallback to inline Objective-C if needed
foo = 'foo'
`NSString *bar = @"bar";`
baz = `[foo stringByAppendingString:bar]`

# current status
NSLog('Khaki is pre-pre-pre-alpha')
```

compiles to this:

```objective-c
UIView *someView = [[[UIView alloc] init] autorelease];
[someView setFrame:CGRectMake(0, 0, 200, 200)];
if (someCondition) {
NSString *path = @"http://google.com";
NSURLRequest *req = [[[NSURLRequest alloc] initWithURL:[[[NSURL alloc] initWithString:path] autorelease]] autorelease];
} else {
NSString *uppercase = @"THIS TEXT IS CAPITALIZED";
id lowercase = [capitalizedText lowercaseString];
id hello = [[@"hello/world" componentsSeparatedByString:@"/"] objectAtIndex:2];
}
SomeType *somePointer = [SomeClass giveMeSomeType];
uint somePrimitive = 100;
NSString *foo = @"foo";
NSString *bar = @"bar";
id baz = [foo stringByAppendingString:bar];
NSLog(@"Khaki is pre-pre-pre-alpha");
```