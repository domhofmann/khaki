Shorthand language for iOS development, compiles to Objective-C

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

# current status
status = 'pre-pre-pre-alpha'
```

becomes this:

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
NSString *status = @"pre-pre-pre-alpha";
```