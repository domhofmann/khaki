Khaki is a shorthand language for iOS development. 

This:

```coffee
class TestApp : UIViewController
  
  def viewDidLoad
  
    # current status
    NSLog('Khaki is pre-pre-pre-alpha')
    
    # implicit types
    foo = 1
    bar = 2.0
    baz = 'hello'
    point = @(100, 200)
    rect = @(0, 0, 200, 200)
    
    # autoreleased instance
    someView = UIView!

    # selector invocation
    someView setFrame:rect

    # conditionals
    if someCondition
      path = 'http://google.com'
      req = NSURLRequest! withURL:(NSURL! withString:path)
    else
      uppercase = 'THIS TEXT IS CAPITALIZED'
      lowercase = capitalizedText lowercaseString
      hello = ('hello/world' componentsSeparatedByString:'/') objectAtIndex:2

    # strict typing
    MyClass myObject = MyClass!
    uint ~myPrimitive = 100

    # import whenever you feel like it
    import AVFoundation
    recorder = AVAudioRecorder!
    
    # call other methods
    if TestApp isAlpha
      self print:'Khaki is pre-pre-pre-alpha'

    # fallback to inline Objective-C if necessary
    `NSString *bar = @"bar"`
    baz = `[foo stringByAppendingString:bar]`
  
  def print:NSString
    NSLog('%@', printStatus)
    
  static def BOOL~ isAlpha
    return yes

```

compiles to this:

```objective-c
#import <UIKit/UIKit.h>
#import <AVFoundation/AVFoundation.h>

@interface TestApp : UIViewController

	- (void)viewDidLoad;
	- (void)print:(NSString *)print;
	+ (BOOL)isAlpha;

@end

@implementation TestApp

	- (void)viewDidLoad {
		NSLog(@"Khaki is pre-pre-pre-alpha");
		NSInteger foo = 1;
		CGFloat bar = 2.0;
		NSString *baz = @"hello";
		CGPoint point = CGPointMake(100, 200);
		CGRect rect = CGRectMake(0, 0, 200, 200);
		UIView *someView = [[[UIView alloc] init] autorelease];
		[someView setFrame:rect];
		if (someCondition) {
			NSString *path = @"http://google.com";
			NSURLRequest *req = [[[NSURLRequest alloc] initWithURL:[[[NSURL alloc] initWithString:path] autorelease]] autorelease];
		} else {
			NSString *uppercase = @"THIS TEXT IS CAPITALIZED";
			id lowercase = [capitalizedText lowercaseString];
			id hello = [[@"hello/world" componentsSeparatedByString:@"/"] objectAtIndex:2];
		}
		MyClass *myObject = [[[MyClass alloc] init] autorelease];
		uint myPrimitive = 100;
		AVAudioRecorder *recorder = [[[AVAudioRecorder alloc] init] autorelease];
		if ([TestApp isAlpha]) {
			[self print:@"Khaki is pre-pre-pre-alpha"];
		}
		NSString *bar = @"bar";
		baz = [foo stringByAppendingString:bar];
	}

	- (void)print:(NSString *)print {
		NSLog(@"%@", printStatus);
	}

	+ (BOOL)isAlpha {
		return YES;
	}

@end
```