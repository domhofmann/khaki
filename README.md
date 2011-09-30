Shorthand language for iOS development, "compiles" to Objective-C

```coffee
someView = UIView!!
someView setFrame:@(0, 0, 200, 200)
url = 'http://google.com'
req = NSURLRequest! withURL:(NSURL! withString:someString)
```

becomes this:

```objective-c
UIView *someView = [[UIView alloc] init];
[someView setFrame:CGRectMake(0, 0, 200, 200)];
NSString *url = @"http://google.com";
NSURLRequest *req = [[[NSURLRequest alloc] initWithURL:[[[NSURL alloc] initWithString:someString] autorelease]] autorelease];
```